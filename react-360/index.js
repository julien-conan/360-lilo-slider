import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  NativeModules
} from 'react-360';
const {AudioModule} = new NativeModules;

// Play a sound to the user's right (3 meters down the positive x-axis)
AudioModule.createAudio('environment', {
  source: asset('sample.mp3'),
  is3d: true,
});
AudioModule.play('environment', {
  position: [3, 0, 0],
});

export default class react_360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Baptême de Lilo et  
            24/06/2018
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#FFFFFFF',
    borderColor: '#BBBBBB',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 24,
  },
});

AppRegistry.registerComponent('react_360', () => react_360);
