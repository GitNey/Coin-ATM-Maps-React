FROM node:16-alpine3.14

RUN apk add dumb-init

# Build Server in app root dir
WORKDIR /app

COPY server/package*.json ./
RUN npm ci

COPY server .

ENV NODE_ENV production
RUN npm run build

# Build React app
ENV REACT_APP_TITLE="Bitstop Frontend Template"
ENV GENERATE_SOURCEMAP="false"
WORKDIR /app/react-ui

COPY react-ui/package*.json ./
RUN npm ci
COPY react-ui .
RUN npm run build

# Go Back to app root dir
WORKDIR /app

# Sets the permission of that folder to only be accessable by, and owned by, 
## the node appuser. (This is a non root user provided by this image)
RUN chown -R node:node /app && chmod -R 755 /app

USER node

CMD ["dumb-init", "node", "dist"]