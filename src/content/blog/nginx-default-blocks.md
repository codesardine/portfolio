---
title: 'The importance of Nginx default server block'
description: 'The vital default server block in Nginx, managing incoming traffic and serving as a fallback for unmatched requests. Discover how it impacts performance and security, best practices for effective web application deployment.'
pubDate: 2024-09-21
tags: "Nginx"
draft: false
---

Setting up an NGINX default server to prevent bots from hitting your main domain is a great way to protect from unwanted traffic. Here's how we can configure NGINX so that requests to a domain, are routed to a default server that shows a generic response, keeping bots away from the actual content.

### Install NGINX 

```
sudo apt update
sudo apt install nginx
```

Make sure NGINX is running:
```
sudo systemctl start nginx
sudo systemctl enable nginx
```
### Create a Default Server Block

In NGINX, the "default" server block can catch all traffic that doesn’t match any of your specific server blocks. We'll set up a basic "default" server to handle unwanted traffic using nano.

```
cd /etc/nginx/sites-available/
sudo nano /etc/nginx/sites-available/default
```
Add the following configuration for the default server:

```
server {
    #This ensures that this server block is the default one for port 80 (HTTP traffic).
    listen 80 default_server;

    # This is optional it log all unwanted traffic to a spesific file
    # I like to do this as it separates logs from your actual application
    access_log /var/log/nginx/unwanted_traffic.log;

    # This wildcard server name catches all requests that don't match other configured domains.
    listen [::]:80 default_server;

    # Block requests to bots with a generic response
    server_name _;  # Catch-all server

    # Return a 444 No Response for unwanted traffic
    location / {
        return 444;  
    }
}
```

Save and close the file (Ctrl + X, then Y, and Enter). Then test the NGINX configuration for any errors:

```
sudo nginx -t
```

Reload NGINX to apply the changes:

```
sudo systemctl reload nginx
```

### Conclusion:

By configuring a default NGINX server block to return a 444 response, you can block unwanted traffic, such as bots, from reaching your main domain. Meanwhile, your application is served from designated server blocks. This approach enhances security by reducing exposure on the main domain and is an essential step before deploying any application to production.
