This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

===================================

1. npx create-next-app

2. import { useRouter } from "next/router"

3. import Link from "next/link"
4. import React from "react" //для програмной навигации
   import Router from "next/router"

5. import Head from "next/head"
6. in folder pages creat new file \_document.js
7. Create a pages/\_app.js file if not already present. Then, import the styles.css file.

8. npm install sass

9. npm i -g json-server //fake server

   - creat file db.json
   - add script in package.json "mock":"json-server - w db.json -p 4200 -d 450"

10. npm i -D concurrently//что бы запустить два скрипта
    - add script in package.json "serve": "concurrrrently \"npm run dev\" \"npm run mock\"",
11. npm i nextjs-progressbar //add packet//это индикатор загрузки
<!-- <NextNprogress// add in app.js
  color="#29D"
  startPosition={0.3}
  stopDelayMs={200}
  height={3}
  showOnShallow={true}
/> -->
12. // next.config.js здесь храним переменные env
    или
13. npm i dotenv

- and in file next.config.js ----
  require('dotenv').config()
- creat file .env
