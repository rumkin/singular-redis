# Singular Redis

Redis factory for singular application.

## Install

Via npm:

```bash
npm i singular-redis
```

## Usage

Usage example:

```javascript
const Singular = require('singular');

const app = new Singular({
    config: {
        redis: {
            host: 'localhost',
            port: 6379,
        },
    },
});

app.module(require('singular-redis'));

app.inject('redis', (redis) => {
   // ... 
});

```