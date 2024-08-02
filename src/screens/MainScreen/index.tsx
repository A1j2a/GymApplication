import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {colors} from '../../assets/colors/colors';

const MainScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.blue} barStyle="light-content" />
      <View style={styles.vwHeader}></View>
    </View>
  );
};

export default MainScreen;
