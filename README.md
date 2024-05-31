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

## Contributing:
- Issues: Report any issues or bugs you encounter.
- Pull Requests: Submit pull requests for any changes or improvements you'd like to make.
   
