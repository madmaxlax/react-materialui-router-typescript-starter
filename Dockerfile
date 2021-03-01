
FROM node:lts-alpine as build

ENV PORT=3003
EXPOSE 3003:3003

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

#this is done in separate lines because docker can cache each one
COPY package.json yarn.lock ./ 
# comment this out if you are using a volume at this directory

RUN yarn install 

COPY . ./
# comment this out if you are using a volume at this directory

# RUN CI=true yarn test || echo "There were failing tests!"

CMD ["yarn", "start"]
