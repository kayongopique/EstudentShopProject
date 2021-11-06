import React, {useEffect, useState} from 'react';
import { View, Platform, StyleSheet, TextInput } from 'react-native';

import { fonts, colors } from '../styles';

const RNSTextInput = ({
  type,
  dark,
  style,
  placeholderTextColor,
  value,
  ...restProps
}) => {
  const finalStyle = [
    styles.default,
    type === 'bordered' && styles.bordered,
    dark && styles.dark,
    style && style,
  ];
  let [value, setValue] = useState(props.value)
  

  useEffect(()=>{
    const Valid = isValid(value);

    if (Valid && props.onChangeText) {
      props.onChangeText(newValue);
    } else {
      props.onChangeText(undefined);
    }

  }, [value])
 

  const onChangeText = (text) => {
    const { formatter } = props;

    const value = formatter ? formatter(text, value) : text;

    setValue({ value }, onValueChange);
  };

  const onValueChange = () => {
    if (isValid(value) && props.onChangeText) {
      props.onChangeText(value);
    }
  };

  const isValid = (value) => {
      return value !== undefined;   
    };

  return (
    <View style={{ alignSelf: 'stretch', flexDirection: 'column' }}>
      <TextInput
        placeholderTextColor={placeholderTextColor || colors.white}
        underlineColorAndroid="white"
        {...restProps}
        style={finalStyle}
        value={value}
        onChangeText={onChangeText}
      />
      {Platform.OS === 'ios' && (
        <View style={{ height: 0.5, backgroundColor: 'white' }} />
      )}
    </View>
  );
};

const HEIGHT = 40;

const styles = StyleSheet.create({
  default: {
    height: HEIGHT,
    color: 'white',
    fontFamily: fonts.primaryRegular,
    ...Platform.select({
      android: {
        paddingLeft: 5,
        opacity: 0.9,
      },
    }),
  },
  bordered: {
    borderWidth: 0.5,
    borderColor: colors.lightGray,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  dark: {
    color: colors.gray,
  },
  primary: {
    borderRadius: HEIGHT / 2,
    backgroundColor: 'transparent',
  },
});

export default RNSTextInput;
