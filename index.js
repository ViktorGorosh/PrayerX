import {AppRegistry} from 'react-native';
import ReduxProvider from './src/ReduxProvider';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ReduxProvider);
