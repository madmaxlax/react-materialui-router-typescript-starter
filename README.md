# Create React App Starter with Router, Material UI, 

## About:

This repo contains the starter setup that I always spend way too much time setting up and gathering:

- React with Create React App https://reactjs.org/docs/create-a-new-react-app.html
- TypeScript
- ESlint and Prettier with Autoformmating in VSCode enabled
  - Thanks to https://github.com/robertcoopercode https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
- Router (with a couple sample pages) https://reactrouter.com/web/api/BrowserRouter
- Material UI https://next.material-ui.com/ (I used the 'next' version to access the v5 version, which should be out in the near future (as of 2021))


## How to use

Download the example [or clone the repo](https://github.com/madmaxlax/react-materialui-router-typescript-starter):


Install it and run:

```sh
yarn install
yarn start
```


**Note:**
For all packages in package.json, I used `"latest"` as the version. 
You may want to freeze them at their current latest version 

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/madmaxlax/react-materialui-router-typescript-starter)

## The idea behind the example

I always spent way too much time with new projects setting up prettier, ESlint, React with Router and Material UI. 
I often used a template like https://github.com/creativetimofficial/material-dashboard-react but then would spend a lot of time scraping out their features to make my own. 

This example demonstrates how you can use [Create React App](https://github.com/facebookincubator/create-react-app) with Material UI and [TypeScript](https://github.com/Microsoft/TypeScript): https://material-ui.com/guides/typescript/

##Structure 
 - [/public](https://github.com/madmaxlax/react-materialui-router-typescript-starter/tree/main/public)
    - This is a create-react-app feature, raw files that will be served as-is, not involved in the compiling process at all, such as index.html and favicon.ico
 - [/Assets](https://github.com/madmaxlax/react-materialui-router-typescript-starter/tree/main/src/assets)
    - This is a create-react-app feature, for items such as scss or images that need to be used in your code or compiled
 - [/Components](https://github.com/madmaxlax/react-materialui-router-typescript-starter/tree/main/src/components)
    - Where you put universally-reusable components for your app (such as link, or custom button)
- [/Layouts](https://github.com/madmaxlax/react-materialui-router-typescript-starter/tree/main/src/layouts)
    - Holding place for various layouts of your pages. Likely your pages will have a consistent header and footer and maybe menu. You could put that all in 1 layout here. Another layout might be your un-auth'd login page, which would have less templated stuff in it. Inspired by https://github.com/creativetimofficial/material-dashboard-react
- [/context](https://github.com/madmaxlax/react-materialui-router-typescript-starter/tree/main/src/context)
    - Where your contexts would be saved. if using redux, consider renaming to store
- [/pages](https://github.com/madmaxlax/react-materialui-router-typescript-starter/tree/main/src/pages)
    - Where your various routes or different whole pages life. Each folder can contain the page content as well as any components that are unique to that page and wouldn't be shared across to the whole app (and moved to the /components folder)
- [/utils](https://github.com/madmaxlax/react-materialui-router-typescript-starter/tree/main/src/utils)
    - Holding place for typescript models or other files / functions / utilities