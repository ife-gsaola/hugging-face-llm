# Hugging Face LLM Project With AWS & React

## Overview

This is an LLM project that allows users to interact with a pre-trained language model (HuggingFace) deployed on AWS. Users can submit queries through a web-based interface, and the system provides real-time responses using AWS services.

## Architecture

1. **Model Deployment on AWS SageMaker**
   - Utilized a [pre-trained language model from Hugging Face](https://huggingface.co/models).
   - Deployed the model on [AWS SageMaker](https://aws.amazon.com/sagemaker/) as an inference endpoint.
   - For deployment details, refer to the [AWS SageMaker documentation](https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html).

2. **AWS Lambda Function**
   - Created an [AWS Lambda function](https://aws.amazon.com/lambda/) to handle incoming user queries and interact with the SageMaker endpoint.
   - The function processes requests and returns responses.
   - Deployed the Lambda function and exposed it via a [Function URL](https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html) for public access.
   - For more information, see the [AWS Lambda documentation](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html).

3. **Frontend: React Application**
   - Built a [React.js](https://reactjs.org/) frontend that allows users to input queries about blockchain and view responses.
   - The frontend sends queries to the Lambda Function URL and displays the results.

4. **Deployment of the React App**
   - **GitHub Pages**: Deployed the React app using [GitHub Pages](https://pages.github.com/), which allows hosting static websites directly from a GitHub repository.

## Prerequisites

- Node.js and npm installed
- Basic knowledge of React and AWS services
- GitHub account

## Setup and Deployment

### 1. Model Deployment on SageMaker
- **Launch an AWS SageMaker Notebook Instance**:
  - Follow [this guide](https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-setup.html) to set up and use a notebook instance.
- **Deploy a Pre-trained Model**:
  - Use the [Hugging Face Integration](https://huggingface.co/docs/sagemaker/inference) to deploy a pre-trained model on SageMaker.
  - For detailed steps, refer to [this tutorial](https://docs.aws.amazon.com/sagemaker/latest/dg/huggingface.html).

### 2. Create an AWS Lambda Function
- **Create Lambda Function**:
  - Visit the [AWS Lambda console](https://console.aws.amazon.com/lambda/home) to create a new function.
  - Use Python or Node.js to write the function code.
  - Refer to the [Lambda function tutorial](https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html).
- **Configure Lambda Permissions**:
  - Attach an IAM role with necessary permissions to interact with SageMaker.
  - For role creation and attachment, see [IAM Roles for Lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html).

### 3. Build and Deploy the React App
- **Clone the Repository**:
  ```bash
  git clone https://github.com/ife-gsaola/hugging-face-llm.git
