docker-compose -f docker-production.yml up -d --remove-orphans --no-deps --build

```
node app 1: http://localhost/app1
node app 2: http://localhost/app2
node app whoami: http://localhost/app1-whoami -> docker.services.whoami: route /whoami
```
