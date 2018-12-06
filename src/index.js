import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify from "aws-amplify";
import config from "./config";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faKey, faUser)

Amplify.configure({
    Auth: {
      mandatorySignIn: true,
      region: config.cognito.REGION,
      userPoolId: config.cognito.USER_POOL_ID,
      identityPoolId: config.cognito.IDENTITY_POOL_ID,
      userPoolWebClientId: config.cognito.APP_CLIENT_ID
    }
});

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
