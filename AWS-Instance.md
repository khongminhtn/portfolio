1. Create Instance
2. Create Static IP
3. Add Domain
4. Add Namespace to domain provider
5. Clone server from github 0
6. Go to projects from Instance's terminal
7. Install dependencies and run projects
8. Add correct server port to Instance network
9. Configure virtual default port (80 & 443) to correct folder
	- From instance's terminal
	- create custom **config file**
	- press 'i' to insert
	- copy the **config content** for the correct port
  - once copied and edited press esc
  - type :x! to force exit 
  - run 'sudo /opt/bitnami/ctlscript.sh restart apache' to restart apache server 
10. run 'sudo /opt/bitnami/bncert-tool' to enable HTTPS
  
```
// This configuration will allow access to website from just ip
// No need to add port

// Create custom config file for port 80
'vi /opt/bitnami/apache/conf/vhosts/myapp-http-vhost.conf'

// Create custom config file for port 443
/opt/bitnami/apache2/conf/vhosts/myapp-https-vhost.conf

// Actual config content for port 80
<VirtualHost _default_:80>
  ServerAlias *
  DocumentRoot "[URL TO PROJECT DIR]"
  <Directory "[URL TO YOUR PROJECT DIR]">
    Require all granted
  </Directory>
  ProxyPass / http://localhost:[CORRECT PORT]/
  ProxyPassReverse / http://localhost:[CORRECT PORT]/
</VirtualHost>

// Actual config content for port 443
  <VirtualHost _default_:443>
    ServerAlias *
    SSLEngine on
    SSLCertificateFile "/opt/bitnami/apache/conf/bitnami/certs/server.crt"
    SSLCertificateKeyFile "/opt/bitnami/apache/conf/bitnami/certs/server.key"
    DocumentRoot "[URL TO PROJECT DIR]"
    <Directory "[URL TO PROJECT DIR]">
      Require all granted
    </Directory>
    ProxyPass / http://localhost:[CORRECT PORT]/
    ProxyPassReverse / http://localhost:[CORRECT PORT]/
  </VirtualHost>
```

<VirtualHost _default_:80>
  ServerAlias *
  DocumentRoot "/home/bitnami/htdocs/portfolio/portfolio-server"
  <Directory "/home/bitnami/htdocs/portfolio/portfolio-server">
    Require all granted
  </Directory>
  ProxyPass / http://localhost:5000/
  ProxyPassReverse / http://localhost:5000/
</VirtualHost>

<VirtualHost _default_:443>
  ServerAlias *
  SSLEngine on
  SSLCertificateFile "/opt/bitnami/apache/conf/bitnami/certs/server.crt"
  SSLCertificateKeyFile "/opt/bitnami/apache/conf/bitnami/certs/server.key"
  DocumentRoot "/home/bitnami/htdocs/portfolio/portfolio-server"
  <Directory "/home/bitnami/htdocs/portfolio/portfolio-server">
    Require all granted
  </Directory>
  ProxyPass / http://localhost:5000/
  ProxyPassReverse / http://localhost:5000/
</VirtualHost>