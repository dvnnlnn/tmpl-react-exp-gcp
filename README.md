# tmpl-react-exp-gcp
A full stack template for Google Cloud Platform App Engine, featuring:
- React
- React Router (DOM)
- Redux
- Express (Node.js)
- Babel
- Sass/SCSS
- Eslint
- Prettier
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

### React - Serve for development
```
npm run serve
```

### React - Build for production
```
npm run build
```

### React - Run the test
```
npm run test
```

### React - Eject configurations
```
npm run eject
```
*Note: this is a one-way operation. Once you `eject`, you can’t go back!*

### Express - Start server with node.js
```
npm start
```


### Express - Start server with nodemon
```
npm run mount
```

---

## References
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
- [[ npm run build ] fails to minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)