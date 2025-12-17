# 🚀 Node.js Monitoring Stack with Prometheus, Grafana & Loki

[![Node.js](https://img.shields.io/badge/Node.js-18.x-blue?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-orange?style=for-the-badge&logo=express)](https://expressjs.com/)
[![Prometheus](https://img.shields.io/badge/Prometheus-v2.x-brightgreen?style=for-the-badge&logo=prometheus)](https://prometheus.io/)
[![Grafana](https://img.shields.io/badge/Grafana-10.x-yellow?style=for-the-badge&logo=grafana)](https://grafana.com/)
[![Docker Compose](https://img.shields.io/badge/Docker%20Compose-v2-blue?style=for-the-badge&logo=docker)](https://docs.docker.com/compose/)

This repository provides a complete, out-of-the-box monitoring solution for a Node.js application. With a single command, you can launch a full stack including:

-   **A Node.js/Express server** that exposes custom metrics.
-   **Prometheus** to scrape and store those metrics.
-   **Grafana** to visualize metrics with a pre-configured dashboard.
-   **Loki** to collect and query logs from the Node.js server.

The entire stack is orchestrated with Docker Compose for a seamless, cross-platform experience.

---

## 🏛️ Architecture

All services are containerized and run on a shared Docker network, allowing them to communicate with each other automatically.

1.  The **Node.js** server runs, exposing its metrics on the `/metrics` endpoint.
2.  **Prometheus** is configured to automatically discover and scrape the `nodeserver` target.
3.  **Loki** is ready to receive logs pushed from the Node.js application's Winston logger.
4.  **Grafana** is pre-configured with Prometheus as a data source, ready for you to build dashboards to visualize your application's performance.

![Architecture Diagram](https://github.com/AkashBhadana/Nodeserver-Prometheus-Grafana/assets/129368922/4c2ff718-0190-448b-aaf0-baeedab2c4a7)

---

## ✨ Features

-   **Single-Command Setup**: Launch the entire stack with `docker-compose`.
-   **Metrics Collection**: Gathers default metrics and custom business metrics from the Node.js app.
-   **Log Aggregation**: Centralizes Node.js application logs in Loki for easy searching.
-   **Automated Discovery**: Services find each other automatically, no manual IP configuration needed.
-   **Pre-configured Grafana**: Prometheus data source is already set up on launch.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

-   [Docker](https://docs.docker.com/get-docker/)
-   [Docker Compose](https://docs.docker.com/compose/install/)

---

## 🚀 Getting Started

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/AkashBhadana/Nodeserver-Prometheus-Grafana.git
    cd Nodeserver-Prometheus-Grafana
    ```

2.  **Start all services:**
    Run the following command to build the images and start all containers in the background.
    ```sh
    docker-compose up -d
    ```

That's it! The entire monitoring stack is now running.

---

## 🖥️ Accessing Your Services

-   **Node.js Application**: [http://localhost:8000](http://localhost:8000)
-   **Prometheus**: [http://localhost:9090](http://localhost:9090)
-   **Grafana**: [http://localhost:3000](http://localhost:3000)
-   **Loki**: Not directly accessed, used as a data source by Grafana.

### Default Credentials

-   **Grafana**:
    -   **Username**: `admin`
    -   **Password**: `admin`

---

## 📊 Metrics

The Node.js application exposes the following custom metrics:

-   `http_express_req_res_time`: A histogram tracking the distribution of request-response times.
-   `total_req`: A counter for the total number of requests received by the server.

You can view these by navigating to Prometheus and querying the metric names.

## 📝 Logging

The Winston logger in the Node.js application is configured to send logs to Loki. You can add Loki as a data source in Grafana to explore, query, and visualize your application logs alongside your metrics.

---

## 🤝 Contributing

-   **Issues**: Feel free to open an issue for any bugs or feature requests.
-   **Pull Requests**: Contributions are welcome! Please submit a pull request for any improvements.