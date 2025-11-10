# AWS Cloud Resume Challenge

This project deploys an AWS cloud-based resume site with a visitor counter. I built this in one day in May to brush up on AWS coming from GCP.

## Architecture

- **Frontend**: Next.js application deployed to S3 with CloudFront distribution
- **Backend**: AWS Lambda function with DynamoDB for visitor counting, deployed using SAM
- **CI/CD**: GitHub Actions workflows for automated deployment

## Project Structure

```
aws_cloud_resume/
├── resume-site/          # Next.js frontend application
├── hit-counter-backend/  # SAM backend application
└── .github/workflows/    # GitHub Actions workflows
```

## Prerequisites

- AWS Account with appropriate permissions
- GitHub repository
- Node.js 18+ and npm
- AWS CLI configured locally (for development)
- AWS SAM CLI (for local backend development)

## Setup Instructions

### 1. Fork/Clone this Repository

```bash
git clone <your-repo-url>
cd aws_cloud_resume
```

### 2. Configure GitHub Secrets

Go to your GitHub repository settings → Secrets and variables → Actions, and add these secrets:

- `AWS_ACCESS_KEY_ID`: Your AWS access key ID
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key
- `S3_BUCKET_NAME`: Name of your S3 bucket for frontend hosting
- `CLOUDFRONT_DISTRIBUTION_ID`: CloudFront distribution ID (if using CloudFront)

### 3. Frontend Setup

```bash
cd resume-site
npm install
npm run dev  # For local development
npm run build # For production build
```

### 4. Backend Setup

```bash
cd hit-counter-backend
sam build
sam local start-api  # For local development
sam deploy --guided   # For first-time deployment
```

## Deployment

### Automatic Deployment

The project uses GitHub Actions for CI/CD:

- **Frontend**: Automatically deploys to S3 when changes are pushed to `resume-site/` directory
- **Backend**: Automatically deploys using SAM when changes are pushed to `hit-counter-backend/` directory

### Manual Deployment

You can also trigger deployments manually:
1. Go to Actions tab in your GitHub repository
2. Select the workflow you want to run
3. Click "Run workflow"

## Development

### Frontend Development

```bash
cd resume-site
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Backend Development

```bash
cd hit-counter-backend
sam local start-api
```

The API will be available at `http://localhost:3000`

## Environment Variables

Make sure to update the API endpoint in your frontend code (`resume-site/src/app/components/VisitorCounter.tsx`) to match your deployed API Gateway URL.

## Troubleshooting

1. **Frontend build fails**: Check Node.js version and npm dependencies
2. **Backend deployment fails**: Verify AWS credentials and SAM template syntax
3. **CORS issues**: Ensure your API Gateway has proper CORS configuration
4. **CloudFront invalidation fails**: Verify CloudFront distribution ID and permissions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE). 
