/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { Button, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View,} from 'react-native';
import {Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainComponent from "./component/MainComponent";


const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };



  return (
      <View style={styles.container}>
          <MainComponent/>
          <StatusBar/>
      </View>
  );
};

const styles = StyleSheet.create({


wrapperCustom: {
    borderRadius: 8,
        padding: 6
},

logBox: {
    padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9'
},

  container: {
    flex: 1,
    backgroundColor: 'white',

    justifyContent: 'center',
  },

  Btn: {
      borderColor: 'white',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
