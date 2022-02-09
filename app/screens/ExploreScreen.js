import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ExploreScreen</Text>
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
