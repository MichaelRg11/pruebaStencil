FROM nginx:alpine
COPY dist/demo/demo.esm.js /usr/share/nginx/html/demo.esm.js
EXPOSE 80
EXPOSE 443
