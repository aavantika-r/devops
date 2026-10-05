# Task 3 – Infrastructure as Code with Terraform

## Objective

Provision and manage a local Docker Nginx container using Terraform.

## Tools Used

* Terraform
* Docker
* Nginx

## Implementation

* Configured the Docker provider in Terraform.
* Created an Nginx Docker image and container using `main.tf`.
* Mapped host port `8082` to container port `80`.
* Used Terraform commands to initialize, plan, apply, and destroy the infrastructure.
* Verified the Nginx application through `http://localhost:8082`.

## Terraform Workflow

```text
terraform init
      ↓
terraform plan
      ↓
terraform apply
      ↓
Verify Nginx
      ↓
terraform destroy
```

## Resources

```text
docker_image.nginx
docker_container.nginx
```

## Result

Successfully provisioned and tested the Nginx Docker container using Terraform and then destroyed the infrastructure successfully.
