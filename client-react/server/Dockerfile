
FROM node:14-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
RUN npm i -g json-server


COPY . .
# Copy app files

# Expose port
EXPOSE 8081
# Start the app
CMD json-server --watch db.json --host 0.0.0.0 --port 8081
