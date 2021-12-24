FROM node:12-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the scr directory contents into the container at /app
COPY . /app/

RUN node -v

# Install dependencies
RUN yarn

# build
RUN yarn build

# Make port 3000 available to the world outside this container
EXPOSE 3000

# start server
CMD ["yarn", "start"]
