# This repository contains a Node.js server with Prometheus and Grafana integration for monitoring and logging.

## Features:

- Node.js Server: The server is built using Express.js and handles HTTP requests.
- Prometheus Integration: Prometheus is used to collect metrics from the server, including request-response times and total requests.
- Grafana Integration: Grafana is used to visualize the metrics collected by Prometheus.
- Logging: Winston logger is used to log messages to a Loki instance.

## Getting Started:
1. Clone the repository:
   
   https://github.com/AkashBhadana/Nodeserver-Prometheus-Grafana.git
2. Change IP in Prometheus-config.yml
   Before running the project, update the prometheus-config.yml file with your correct IP address and port for the server.

   Open the prometheus-config.yml file and replace the IP address (112.196.36.85) with the IP of your machine and ensure the port (8000) is correct.
   global:
  scrape_interval: 4s

   scrape_configs:
    - job_name: prometheus
       static_configs:
          - targets: ["<your-ip>:8000"]
   Make sure to replace <your-ip> with your actual server IP.

3. Install dependencies:  
   npm install

4. Start the Node.js Server:
   npm start

5. Start the server: http://localhost:8000

6. Run Prometheus with Docker:
   Navigate to the folder containing your prometheus-config.yml file.
   Run docker-compose up to start Prometheus.
   Check if Prometheus is running on port 9090 by accessing:
   http://localhost:9090

7. Run Grafana with Docker:
   Run the following Docker command to start Grafana on port 3000:   
   docker run -d -p 3000:3000 --name=grafana grafana/grafana-oss
   Check if Grafana is running by accessing:
   http://localhost:3000

8. Integrate Grafana with Prometheus:
   Once Grafana is running, log in to the Grafana dashboard (default username: admin, password: admin).
   Add Prometheus as a data source in Grafana by navigating to Configuration > Data Sources and selecting Prometheus.
   Enter the URL of your Prometheus server (http://localhost:9090) and save the data source.

9. Access the Monitoring Dashboards:
   Access the server at:
   http://localhost:8000

   Access Prometheus at:
   http://localhost:9090

   Access Grafana at:
   http://localhost:3000

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
   
