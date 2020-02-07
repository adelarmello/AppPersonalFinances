/**
 * @format
 */

if(__DEV__) {
    import('./config/ReactotronConfig');
}

import {AppRegistry} from 'react-native';
import App from './src';
import Main from './src/Pages/Main';
import NewEntry from './src/Pages/NewEntry';
import Report from './src/Pages/Report';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Report);
