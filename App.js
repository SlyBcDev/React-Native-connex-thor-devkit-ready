import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {cry} from 'thor-devkit';
import {Driver, SimpleNet} from '@vechain/connex.driver-nodejs';
import {Framework} from '@vechain/connex-framework';
import './shim.js';

const App = () => {
  useEffect(async () => {
    const driver = await Driver.connect(
      new SimpleNet('https://vethor-node-test.vechaindev.com'),
    );
    let connex = new Framework(driver);
    console.log(connex);
    let words = cry.mnemonic.generate();
    console.log(words);
  });

  return (
    <View style={styles.screen}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
