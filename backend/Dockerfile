# Use the official Node.js 16 image from Docker Hub
from node:16-alpine

#Set the working diretory inside the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --production

#copy the rest of your application code
COPY . .

#expose the port of the app runs on
EXPOSE 3000

# command to run your app
CMD ["node", "src/index.js"]