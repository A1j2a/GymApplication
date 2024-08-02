import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../assets/colors/colors';
import {getHeight, getWidth, screenSize} from '../../global/GConstant';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  vwHeader: {
    flexDirection: 'row',
    paddingHorizontal: getWidth(20),
    alignItems: 'center',
    backgroundColor: colors.blue,
    justifyContent: 'space-between',
    width: screenSize.width,
    height: getHeight(60),
  },
});
