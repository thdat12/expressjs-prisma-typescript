## Description

[Express].js: https://expressjs.com/
[Prisma]: https://www.prisma.io/
[Postgres]: https://www.postgresql.org/

## Installation

```bash
$ npm install
$ npx prisma init
$ npx prisma migrate dev --name init
```

## Running the app

```bash
# run development mode
$ npm run dev

# build & run production mode
$ npm run build
$ node build/index.js
```

## Running the app using pm2

```bash
$ sudo npm install pm2@latest -g
$ npm run build
$ pm2 start build/index.js --name "app-name"
```
