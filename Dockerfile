FROM public.ecr.aws/lambda/nodejs:14
RUN npm i -g pnpm 
WORKDIR ${LAMBDA_TASK_ROOT}

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . . 
RUN pnpm build hello-world

CMD ["dist/apps/hello-world/apps/hello-world/src/main.handler"]