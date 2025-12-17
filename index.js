const express = require("express");
const responseTime = require('response-time');
const client = require("prom-client"); // Metric Collection
const { createLogger, transports } = require("winston");
const LokiTransport = require("winston-loki");
const options = {
  transports: [
    new LokiTransport({
      host: process.env.LOKI_HOST || "http://localhost:3100"
    })
  ]
};
  const logger = createLogger(options);
const { doSomeHeavyTask } = require("./util");
const register = client.register; // Assign register to a variable for better readability

const app = express();
const PORT = process.env.PORT || 8000;

client.collectDefaultMetrics();

app.get("/", (req, res) => {
    logger.info('req came on / router');
  return res.json({ message: 'Hello from Express Server' });
});

app.get("/slow", async (req, res) => {
  try {
    logger.info('req came on /slow router');
    const timeTaken = await doSomeHeavyTask();
    return res.json({
      status: "Success", 
      message: `Heavy task completed in ${timeTaken}ms`,
    });
  } catch (error) {
    logger.error('${error.message}')
    console.error(error); // Log the error for better debugging
    return res.status(500).json({ status: "Error", error: "Internal Server Error" });
  }
});

app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  const metrics = await register.metrics();
  res.send(metrics);
});

const reqResTime = new client.Histogram({
  name: "http_express_req_res_time",
  help: "this tells how much time is taken by req and res",
  labelNames: ["method", "route", "status_code"],
  buckets: [1, 50, 100, 200, 400, 500, 800, 1000, 2000],
});

const totalReqCounter = new client.Counter({
  name: 'total_req',
  help: 'tells total req',
});

app.use(responseTime((req, res, time) => {
  reqResTime.labels({
    method: req.method, route: req.url, status_code: res.statusCode
  }).observe(time);
  totalReqCounter.inc();
}));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});