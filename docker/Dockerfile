#####################################
# 构建容器
#####################################
FROM smebberson/alpine-nginx-nodejs:4.4.0

MAINTAINER Yi Gao <kosilence125@gmail.com>

#####################################
# Aliyun Mirrors
#####################################
RUN cp /etc/apk/repositories /etc/apk/repositories.bak && \
    echo "http://mirrors.aliyun.com/alpine/v3.4/main/" > /etc/apk/repositories

#####################################
# yarn
#####################################
RUN apk update && \
    apk add yarn

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
    mv /var/www/my-vue/favicon.ico /var/www/cosin.tk/favicon.ico && \
    rm -rf /var/www/my-vue

RUN chown -R nginx:www-data /var/www/cosin.tk