FROM node:23.5 As build
WORKDIR /app
COPY package*.json ./
RUN npm install --unsafe-perm
COPY . .
RUN chmod -R 777 node_modules
RUN npx vite build

FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build app/dist /usr/share/nginx/html
EXPOSE 4075
