terraform {
  backend "s3" {
    bucket         = "projeto-infra-escalavel-tfstate-yan-2026"
    key            = "infra/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
  }
}