# React Starter Kit  
This application has the bare minimum for creating a React with Redux web application.  
**What it uses:**  
- **[React](https://reactjs.org/docs/getting-started.html):** Includes React, [React-Dom](https://reactjs.org/docs/react-dom.html) 
and [Prop-Types](https://reactjs.org/docs/typechecking-with-proptypes.html).  
- **[Redux](https://redux.js.org/):** All tools needed to create redux components as well as 
[redux-thunk](https://github.com/reduxjs/redux-thunk) middleware for synchronous actions and 
[redux-logger](https://github.com/evgenyrodionov/redux-logger) to view redux states from the console window.  
- **[Node-Sass](https://github.com/sass/node-sass):** This allows for scss files to be loaded with Parcel.  
- **[React-Router-Dom](https://reacttraining.com/react-router/web/guides/philosophy):** Router for entire application. 
This can be configured from the App.js file.  
- **[Parcel-Bundler](https://parceljs.org/getting_started.html):** The simplest way to bundle, configure, and spin up 
a server without massive javascript bundlers like Webpack, Browserify, and Gulp.  
  
## To Start  
All bundled files will be added to the 'dist' folder. When releasing for production, you must change the path names for 
the index.html file in 'dist' folder.  
```bash
# Start server hosted on http://localhost:1234
npm run start

# Build for release
npm run build
```
