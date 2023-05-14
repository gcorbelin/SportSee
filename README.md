This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Clone this repo from [Github](https://github.com/gcorbelin/SportSee.git).
Then install packages by running:

```bash
npm i
# or
yarn install
```

## Development mode

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to launch dev mode.
Dev mode uses mocked datas.
They can be found in `pages/api/mockedDatas.ts`.

## Production mode

To launch production mode, You will first need the backend project that provides the API.

### 1. Clone backend

Clone the backend project from [Github](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git) then run it by following its Readme instructions.

Nothing has been changed so it should run on the `:3000` port.

### 2. Build Front-End

Then build the Front-end project with:

```bash
npm run build
# or
yarn build
```

### 3. Launch production mode

Finally launch the Front-end project with:

```bash
npm run start
# or
yarn start
```
