import {Navigation} from 'react-native-navigation';
import {_package} from 'utils';

export function startApp() {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: `${_package}.bottomTabs`,
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: `${_package}.Home`,
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: `${_package}.Explore`,
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: `${_package}.Placeplay`,
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: `${_package}.Activity`,
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: `${_package}.Profile`,
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
}

export function startLogin() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: `${_package}.Login`,
            },
          },
        ],
      },
    },
  });
}

export function startRegister() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: `${_package}.Register`,
            },
          },
        ],
      },
    },
  });
}
