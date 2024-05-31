# This repository contains a Node.js server with Prometheus and Grafana integration for monitoring and logging.

## Features:

- Node.js Server: The server is built using Express.js and handles HTTP requests.
- Prometheus Integration: Prometheus is used to collect metrics from the server, including request-response times and total requests.
- Grafana Integration: Grafana is used to visualize the metrics collected by Prometheus.
- Logging: Winston logger is used to log messages to a Loki instance.

## Getting Started:
1. Clone the repository:
   
   https://github.com/AkashBhadana/Nodeserver-Prometheus-Grafana.git
2. Install dependencies:  
   npm install
3. Start the server: http://localhost:8000
4. Access the server: http://localhost:8000
5. Access Prometheus: http://localhost:9090
6. Access Grafana: http://localhost:3000

## Metrics:
- Request-Response Time: The histogram http_express_req_res_time tracks the time taken by the server to respond to requests.
- Total Requests: The counter total_req counts the total number of requests made to the server.

## Logging:
- Winston Logger: Winston logger is used to log messages to a Loki instance.
- Loki Transport: The Loki transport is used to send logs to a Loki instance.

![68747470733a2f2f67726166616e612e636f6d2f7374617469632f696d672f67726166616e612f73686f77636173655f76697375616c697a652e6a7067](https://github.com/AkashBhadana/Nodeserver-Prometheus-Grafana/assets/129368922/4c2ff718-0190-448b-aaf0-baeedab2c4a7)

## Contributing:
- Issues: Report any issues or bugs you encounter.
- Pull Requests: Submit pull requests for any changes or improvements you'd like to make.
   
