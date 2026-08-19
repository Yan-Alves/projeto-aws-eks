data "terraform_remote_state" "rede" {
  backend = "s3"
  config = {
    bucket = "projeto-infra-escalavel-tfstate-yan-2026"
    key    = "infra/terraform.tfstate"
    region = "us-east-1"
  }
}

module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 20.0"

  cluster_name    = "${var.projeto_nome}-cluster"
  cluster_version = "1.30"

  cluster_endpoint_public_access  = true

  vpc_id                   = data.terraform_remote_state.rede.outputs.vpc_id
  subnet_ids               = data.terraform_remote_state.rede.outputs.subnets_publicas_ids

  eks_managed_node_groups = {
    nodes = {
      min_size     = 1
      max_size     = 3
      desired_size = 2

      instance_types = ["t3.medium"]
      ami_type       = "AL2_x86_64"
    }
  }

  enable_cluster_creator_admin_permissions = true

  tags = {
    Environment = "lab"
    Terraform   = "true"
  }
}