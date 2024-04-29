# Use the official Node.js 16 image from Docker Hub
from node:16-alpine

#Set the working diretory inside the container
WORKDIR /usr/src/app

#Copy the package .json and package-lock.json
COPY package*.json ./

#Install dependencies
RUN npm install --only=production

#copy the rest of your application code
COPY . .

#expose the port of the app runs on
EXPOSE 3000

# command to run your app
CMD ["node", "server.js"]