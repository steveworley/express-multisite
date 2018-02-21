# Multisite with Express

Demonstrate how to manage multiple domains leveraging a single NodeJS code base.

## Setup

```
yarn install
```

or 

```
npm install
```

You will need to update your host file to point 2 domains to your local environment the application uses `multisite1.local` and `multisite2.local` for demonstration.

```
127.0.0.1 multisite1.local
127.0.0.1 multisite2.local
```

## Run

```
yarn start
```

or

```
npm run start
```

Then you can navigate to [http://multisite1.local:3000](http://multisite1.local:3000) and [http://multisite2.local:3000](http://multisite2.local:3000) to view the different demo sites.
