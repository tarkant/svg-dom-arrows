# 📦 Webpack + TypeScript + SASS Boilerplate

This is a simple boilerplate that provides you with all the tools you'll need to create a front-end Web application bundlet with Webpack.

## 🍴 How to use this boilerplate ?

Simple, just click the "Use this template" button or better, [click here](https://github.com/tarkant/webpack-typescript-sass-boilerplate/generate) and create your repo.

Next, run the good old :
```bash
npm install
```

And you're good to go!

## 💻 How to run the developement server ?

Easy, run this command and your server will be on `http://localhost/8080`


```bash
npm start
```

If you need to change the port for whatever reason head to the package.json file and add the flag --port 9000 to the end of the start script and before the closing quote as follows :

```json
"scripts": {
    "start": "webpack-dev-server --mode development --port 9000",
}
```

Of course it's up to you if you want to use another port 😊 .

## ⚒ How to build my app ?

So you've finised everything and you want to ship it? Just run :

```bash
npm run build
```

This will generate a bundle in the `dist` folder that you can upload to your server 🌍 .

## 🧹 Eslint for clean TS

You'll notice that I've also included ESlint with some rules for the TS part. If you're not into that stuff, you can remove the `.eslintrc.json` and run the following command :

```bash
npm remove -D @typescript-eslint/eslint-plugin @typescript-eslint/eslint-plugin-tslint @typescript-eslint/parser eslint
```

Be mindful though that I won't really advise this because ESlint lets you keep your code clean.

If you want to lint your code, just run :

```bash
npm run build
```

This will lint and fix all fixable lint issues.

## 🆘 Issues and contributions

If you have an issue with the boilerplate or want to contribute, please let me know I'll be happy to interact with you.

Happy building!

## ⏲ Changelog

- v1.1.0: Bumped packages version and changed the path flattening for assets.
- v1.0.0: Initial template ready to be used.