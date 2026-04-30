variable "region" {
  description = "AWS Region"
  default     = "ap-south-1"
}

variable "instance_type" {
  description = "EC2 Instance Type"
  default     = "t3.micro"
}

variable "key_name" {
  description = "Name of SSH Key Pair"
  type        = string
}

variable "your_ip" {
  description = "Your public IP to restrict SSH (optional but recommended)"
  type        = string
  default     = "0.0.0.0/0"   # Change this later to your IP for better security
}