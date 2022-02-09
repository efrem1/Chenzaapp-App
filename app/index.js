import {startApp, startLogin, startRegister} from './app';
import {registerScreeens} from 'screens';
import {Navigation} from 'react-native-navigation';

export function application() {
  registerScreeens();
  Navigation.events().registerAppLaunchedListener(() => {
    return startLogin();
  });
}
