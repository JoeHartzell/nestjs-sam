# SAM + Nest.js + Docker = 💖

This is a example project showcasing using AWS Serverless Application Model (SAM) and Nest.js. This is a Nest.js monorepo project that uses Dynamoose to connect to AWS DynamoDB.

## Technology

### Infrastructure

Infrastructure consists of AWS docker lambda functions with DynamoDB as the database of choice.

- [SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) - Used to compile AWS lambda functions and deployment
- [Docker](https://www.docker.com/) - Used for running AWS DynamoDB locally and for SAM lambda deployments
- [DynamoDB](https://aws.amazon.com/dynamodb/) - Database of choice

### Notable Packages

- [Nest.js](https://docs.nestjs.com/) - Provides project structure. Dependency injection, request scoping, etc...
- [Dynamoose](https://dynamoosejs.com/getting_started/Introduction) - _ORM_ of choice for working with AWS DynamoDB

## Getting Started 🚀

Put simply...

```bash
# Start the database
$ docker compose up -d

# Build the lambdas
$ sam build

# Run the lambdas locally
$ sam local start-api --docker-network nestjs-sam-network

# Hit your new API
$ curl http://localhost:3000/hello
```
