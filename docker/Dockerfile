#####################################
# 构建容器
#####################################
FROM smebberson/alpine-nginx-nodejs:4.4.0

LABEL maintainer="Yi Gao <kosilence125@gmail.com>"

#####################################
# yarn
#####################################
RUN npm install --global yarn

#####################################
# Nginx Config
#####################################
ADD nginx/nginx.conf /etc/nginx/nginx.conf

#####################################
# Code
#####################################
COPY ./my-vue /var/www/my-vue

WORKDIR /var/www/my-vue

RUN yarn install && \
    npm run build

RUN mkdir /var/www/cosin.tk && \
    mv /var/www/my-vue/dist /var/www/cosin.tk/dist && \
    mv /var/www/my-vue/favicon.ico /var/www/cosin.tk/dist/favicon.ico && \
    rm -rf /var/www/my-vue

RUN chown -R nginx:www-data /var/www/cosin.tk