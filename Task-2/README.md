# Task 2 – Jenkins CI/CD Pipeline

## Objective

Create a simple Jenkins pipeline to automate the build, test, and deployment of a Node.js application using Jenkins and Docker.

## Tools Used

* Jenkins
* Docker
* GitHub
* Node.js

## Pipeline Workflow

```text
GitHub
   ↓
Jenkins
   ↓
Build
   ↓
Test
   ↓
Docker Deploy
```

## Pipeline Stages

### 1. Build

Jenkins builds a Docker image from the application's Dockerfile.

### 2. Test

Jenkins installs the Node.js dependencies and runs the application test.

### 3. Deploy

Jenkins removes the previous Docker container, if present, and starts a new container from the newly built Docker image.

## Project Structure

```text
Task-2/
├── Jenkinsfile
├── Dockerfile
├── app.js
├── package.json
├── README.md
└── screenshots/
    └── jenkins-success.png
```

## Jenkinsfile

The Jenkinsfile uses a declarative pipeline with three stages:

* Build
* Test
* Deploy

The pipeline is connected to the GitHub repository and is executed by Jenkins.

## Result

The Jenkins pipeline was successfully executed and completed with:

```text
Finished: SUCCESS
```

This task demonstrates a basic CI/CD workflow using Jenkins and Docker.
