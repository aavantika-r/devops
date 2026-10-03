# Node.js CI/CD Pipeline

## DevOps Internship – Task 1

This project demonstrates an automated CI/CD pipeline for a sample Node.js application using GitHub Actions, Docker, and Docker Hub.

### 🛠️ Technologies

* Node.js
* GitHub
* GitHub Actions
* Docker
* Docker Hub

### 🔄 CI/CD Workflow

The pipeline is automatically triggered whenever code is pushed to the `main` branch.

```text
Git Push
   ↓
GitHub Actions
   ↓
Install Dependencies
   ↓
Run Tests
   ↓
Build Docker Image
   ↓
Login to Docker Hub
   ↓
Push Docker Image
```

### 📁 Project Structure

```text
nodejs-demo-app/
├── app.js
├── package.json
├── Dockerfile
├── README.md
└── .github/
    └── workflows/
        └── main.yml
```

### 🐳 Docker Image

The Docker image is published to Docker Hub:

```text
avan0/nodejs-demo-app:latest
```

### 🔐 Security

Docker Hub credentials are stored securely using GitHub Actions Secrets:

```text
DOCKERHUB_USERNAME
DOCKERHUB_TOKEN
```

### ✅ Result

The GitHub Actions pipeline successfully tests the application, builds the Docker image, and pushes the image to Docker Hub automatically.
