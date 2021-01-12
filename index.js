/**
 * @format
 */

// import { Auth } from '@aws-amplify/auth';
import Amplify from 'aws-amplify';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import config from './src/aws-exports';

Amplify.configure(config);
// Auth.configure(config);

AppRegistry.registerComponent(appName, () => App);
