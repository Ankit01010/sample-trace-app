# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install express @google-cloud/trace-agent

# # Install application dependencies
# RUN npm install

# Copy the application code to the working directory
COPY . .

# Expose port 8080
EXPOSE 8080

# Command to run the application with tracing
CMD ["node", "--require=@google-cloud/trace-agent", "index.js"]
