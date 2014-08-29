angular-emf2014
===============

Web-based planner for EMF 2014


Apache configuration
--------------------
```
Listen 8088
<VirtualHost *:8088>
     SSLProxyEngine On
     ProxyPass / https://frab.emfcamp.org/
     ProxyPassReverse / https://frab.emfcamp.org/

     Header set Access-Control-Allow-Origin "*"
     Header set Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept"
</VirtualHost>
```
