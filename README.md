# React Starter Kit  
This application is the bare minimum for creating a React web application.  
**What it uses:**  
- **React:** Includes React, React-Dom and Prop-Types  
- **Redux:** All tools needed to create redux components as well as redux-thunk middleware for synchronous actions and
redux-logger to view redux states from the console window.  
- **Node-Sass:** This allows for scss files to be loaded with Parcel.  
- **React-Router-Dom:** Router uses for entire application. This can be configured from the App.js file.  
- **Parcel-Bundler:** The simplest way to bundle, configure, and spin up a server without massive javascript compilers like 
Webpack, Browserify, and Gulp.  
  
## To Start  
All bundled files will be added to the 'dist' folder. When releasing for production, you must change the path names for 
the index.html file in 'dist' folder.  
```bash
# Start server hosted on http://localhost:1234
npm run start

# Build for release
npm run build
```
