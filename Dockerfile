# Multi-stage Dockerfile to build React client and Node server
FROM node:18-alpine AS client-build
WORKDIR /app

# install client deps and build
COPY client/package*.json ./client/
RUN apk add --no-cache bash git
RUN cd client && npm install
COPY client ./client
RUN cd client && npm run build

FROM node:18-alpine AS server-build
WORKDIR /app

# install server deps
COPY server/package*.json ./server/
RUN cd server && npm install --production
COPY server ./server

# copy client build into server folder
COPY --from=client-build /app/client/build ./server/build

WORKDIR /app/server
ENV NODE_ENV=production
ENV PORT=5000
EXPOSE 5000

CMD ["node", "index.js"]
