# 🚀 DevOps CI/CD Pipeline with Zero-Downtime Deployment

A production-grade CI/CD pipeline built using Jenkins, Docker, and AWS EC2 that enables automated deployments with zero downtime using a blue-green inspired strategy.

---

## 🌐 Live Demo

🔗 http://nikhildevopstech.online/

---

## 🧠 Project Overview

This project demonstrates a complete DevOps workflow:

* Code is pushed to GitHub
* Jenkins pipeline is automatically triggered via webhook
* Docker image is built and pushed to Docker Hub
* Application is deployed on AWS EC2
* Zero-downtime deployment ensures uninterrupted service

---

## 🏗️ Architecture

```
Developer → GitHub → Webhook → Jenkins Pipeline
                                  ↓
                           Docker Build
                                  ↓
                           Docker Hub
                                  ↓
                           AWS EC2 Server
                                  ↓
                        Nginx Reverse Proxy
                                  ↓
                           Live Application
```

---

## ⚙️ Tech Stack

* **CI/CD:** Jenkins
* **Containerization:** Docker
* **Cloud:** AWS EC2
* **Web Server:** Nginx
* **Version Control:** GitHub
* **Registry:** Docker Hub
* **Backend:** Node.js (Express)

---

## 🔥 Features

* ✅ Automated CI/CD pipeline using Jenkins
* ✅ GitHub webhook integration (auto deploy on push)
* ✅ Dockerized application deployment
* ✅ Docker Hub integration for image storage
* ✅ Zero-downtime deployment strategy
* ✅ Nginx reverse proxy with custom domain
* ✅ Health-check based deployment validation

---

## 🔄 CI/CD Pipeline Flow

1. Developer pushes code to GitHub
2. GitHub triggers Jenkins via webhook
3. Jenkins performs:

   * Code checkout
   * Build Docker image
   * Push image to Docker Hub
   * Deploy container to EC2
4. Zero-downtime deployment:

   * New container starts on temporary port
   * Health check is performed
   * Old container is replaced safely
5. Application remains live throughout

---

## 🚀 Deployment Strategy (Zero Downtime)

This project implements a **rolling deployment strategy**:

* New container runs on a temporary port (3001)
* Health check ensures app stability
* Old container is stopped
* New container replaces it on port 3000

👉 This ensures **no service interruption during deployment**

---

## 📸 Screenshots (Add Yours)

* Jenkins pipeline success
* Docker containers running
* Live website

---

## 🛠️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/seth1026/devops-node-app.git
cd devops-node-app
```

### 2. Build Docker Image

```bash
docker build -t devops-node-app .
```

### 3. Run Container

```bash
docker run -d -p 3000:3000 devops-node-app
```

---

## 🔐 Jenkins Configuration

* Jenkins installed on EC2
* Docker configured for Jenkins user
* GitHub webhook enabled
* Credentials stored securely (Docker Hub)

---

## 📦 Docker Hub

Images are pushed to:

```
nikhilseth2610/devops-node-app
```

---

## 🧠 Key Learnings

* Building CI/CD pipelines using Jenkins
* Managing containerized deployments
* Handling real-world issues like:

  * Port conflicts
  * Disk limitations
  * Service downtime
* Implementing zero-downtime deployment strategies

---

## 📌 Future Improvements

* Blue-Green deployment using Nginx routing
* Kubernetes-based deployment
* Monitoring with Prometheus & Grafana
* Automated testing integration

---

## 👨‍💻 Author

**Nikhil Seth**

---

## ⭐ If you like this project

Give it a star ⭐ on GitHub!
