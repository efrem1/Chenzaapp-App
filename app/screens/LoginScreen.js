import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {startApp} from '../app';

export function LoginScreen() {
  function clickMe() {
    return startApp();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LoginScreen</Text>
      <Animated.View entering={FadeIn}>
        <Text>BounceIn BounceIn</Text>
      </Animated.View>
      <TouchableOpacity onPress={clickMe}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
  },
});
