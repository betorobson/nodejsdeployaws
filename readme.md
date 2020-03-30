docker-compose -f docker-production.yml up -d --remove-orphans --no-deps --build

```
node app 1: http://localhost/app1
node app 2: http://localhost/app2
node app 3 through app1: http://localhost/app1-get-app3 -> docker.services.app3: route /app3
node app whoami through app1 : http://localhost/app1-whoami -> docker.services.whoami: route /whoami
```

This service communication is only possible because Traefik creates an Docker network between then
automatically by its own.
