import React from 'react';
import {View} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';
import {ActivityScreen} from './ActivityScreen';
import {ExploreScreen} from './ExploreScreen';
import {HomeScreen} from './HomeScreen';
import {LoginScreen} from './LoginScreen';
import {PlaceplayScreen} from './PlaceplayScreen';
import {ProfileScreen} from './ProfileScreen';
import {RegisterScreen} from './RegisterScreen';
import {client} from '../client';
import {_package} from 'utils';
import {ApolloProvider} from '@apollo/client';

function registerScreen(name, Comp) {
  const Component = gestureHandlerRootHOC(Comp);
  Navigation.registerComponent(
    name,
    () => props =>
      (
        <ApolloProvider client={client}>
          <Component {...props} />
        </ApolloProvider>
      ),
    () => Component,
  );
}

export function registerScreeens() {
  registerScreen(`${_package}.Activity`, ActivityScreen);
  registerScreen(`${_package}.Explore`, ExploreScreen);
  registerScreen(`${_package}.Home`, HomeScreen);
  registerScreen(`${_package}.Login`, LoginScreen);
  registerScreen(`${_package}.Placeplay`, PlaceplayScreen);
  registerScreen(`${_package}.Profile`, ProfileScreen);
  registerScreen(`${_package}.Register`, RegisterScreen);
}
