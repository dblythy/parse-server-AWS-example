# Parse Server AWS Example

1. [Create a new AWS EB NodeJS application](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.environments.html) with AWS sample code.
2. **Privately** clone this repo, and update [.env](https://github.com/dblythy/parse-server-AWS-example/blob/master/.env) locally. Do not commit changes to .env, as this **will** expose your Parse Server. The .env file should never be uploaded, and is here for demonstration purposes.
4. [Create AWS access keys](https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/), and set them as GitHub secrets (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY) via settings -> Secrets -> New Repository Secrets.
5. Update [CI.yml](https://github.com/dblythy/parse-server-AWS-example/blob/master/.github/workflows/ci.yml) to correctly point to your application_name, environment_name, and region. **DO NOT** set your AWS Access Keys here, as this could expose your instance.
6. Now, any changes to your master branch, should run through `npm lint`, then `npm test`, before zipping up and deploying to AWS EB.

**USE AT YOUR OWN RISK**
