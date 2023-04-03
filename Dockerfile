FROM node:16-alpine As development
WORKDIR /opt/app
ADD package.json yarn.lock ./
RUN yarn install
ADD . .
RUN yarn run build


FROM node:16-alpine As production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/app
ADD package.json yarn.lock ./
RUN yarn install --production
COPY --from=development /opt/app/dist ./dist
CMD ["node", "dist/main"]