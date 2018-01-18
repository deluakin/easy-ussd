// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false
};


export const FirebaseConfig = {
  firestore: {      
      apiKey: 'AIzaSyBljyffH_GFBrXWnQFE5-Cm03P5b_jOvnQ',      
      authDomain: 'ussd-app-designer.firebaseapp.com',      
      databaseURL: 'https://ussd-app-designer.firebaseio.com',      
      projectId: 'ussd-app-designer',      
      storageBucket: 'ussd-app-designer.appspot.com',      
      messagingSenderId: '1057560916279'    
  }  
};