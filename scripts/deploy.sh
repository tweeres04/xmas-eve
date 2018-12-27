yarn build

ssh root@tweeres.ca 'rm -rf /var/www/xmas-eve'
ssh root@tweeres.ca 'rm /etc/nginx/sites-enabled/xmas-eve'

scp -r dist root@tweeres.ca:/var/www/xmas-eve
scp etc/xmas-eve root@tweeres.ca:/etc/nginx/sites-available/xmas-eve

ssh root@tweeres.ca 'ln -s /etc/nginx/sites-available/xmas-eve /etc/nginx/sites-enabled/xmas-eve'
ssh root@tweeres.ca 'nginx -s reload'