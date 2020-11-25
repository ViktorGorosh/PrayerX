import {AppRegistry} from 'react-native';
import 'react-native-get-random-values'
import ReduxProvider from './src/ReduxProvider';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ReduxProvider);
