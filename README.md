# tmpl-react-exp-gcp
A full stack template for Google Cloud Platform App Engine, featuring:
- Vue (Vue Router, Vuex)
- Node.js (Express)
- Babel, Sass/SCSS (with Vue CLI)
- Eslint, Prettier
- PWA support
- GCP Logging API

It supports front-end & back-end development at the same time. More details are listed below.

---
## GCP Setup
1. [Create a new project at GCP.](https://cloud.google.com/resource-manager/docs/creating-managing-projects)
2. [Install & initialize GCP environment.](https://cloud.google.com/sdk/docs/quickstart-macos)
3. [Generate GCP service account key.](https://cloud.google.com/logging/docs/reference/libraries#setting_up_authentication)
4. Fill in GCP project id. (\*)
5. Replace *gcp/sa-key.json* with GCP service account key. (\*)

(\*) You can use **Ctrl+F** to look for '**[GCP_INIT]**', which indicates the places to fill in the required data.

---
## Project Install
```
npm install
```

---
## Start Development
```
npm run dev
```
It will start:
- A front-end server with hot-reload at port 3000.
- A watcher to build front-end files in real-time.
- A node.js express back-end server at port 8888.

which is equal to running *npm run serve*, *npm run build*, and *npm run mount* at the same time.

---
## Start Deployment
```
npm run deploy
```
You should do this after ```gcloud init``` (in [*GCP Setup*](#gcp-setup), step 2).

---
## Other Commands

### Vue.js - Serve for development
```
npm run serve
```

### Vue.js - Build for WEB production
```
npm run build
```

### Vue.js - Build for PWA production
```
npm run build-pwa
```

### Express - Start server with node.js
```
npm start
```

### Express - Start server with nodemon
```
npm run mount
```

---

### References
- [Vue Configuration Reference](https://cli.vuejs.org/config/).



---
---


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

<!-- todo: finish README.md -->