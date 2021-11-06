import React, { Component } from "react";
import { StyleSheet, TextInput, Dimensions } from "react-native";
import * as Icon from "@expo/vector-icons";
import Icons from "react-native-vector-icons/FontAwesome";

import Text from "./Text";
import Block from "./Block";
import Button from "./Button";
import { theme } from "../constants";

const {width} = Dimensions.get('window');

export default class SearchInput extends Component {
  state = {
    toggleSecure: false
  };

  renderLabel() {
    const { label, error } = this.props;

    return (
      <Block flex={false}>
        {label ? (
          <Text gray2={!error} accent={error}>
            {label}
          </Text>
        ) : null}
      </Block>
    );
  }
  renderLeftIcon = () =>{
      const { iconName, iconColor, iconSize} = this.props;
      return (
          <Block flex={false}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 5,
            }}
          >
            <Icons 
             name={iconName? iconName : null} 
             size={iconSize}
             color={iconColor}
            />
          </Block>
      );
  }
  renderToggle() {
    const { secure, rightLabel } = this.props;
    const { toggleSecure } = this.state;

    if (!secure) return null;

    return (
      <Button
        style={styles.toggle}
        onPress={() => this.setState({ toggleSecure: !toggleSecure })}
      >
        {rightLabel ? (
          rightLabel
        ) : (
          <Icon.Ionicons
            color={theme.colors.gray}
            size={theme.sizes.font * 1.35}
            name={!toggleSecure ? "md-eye" : "md-eye-off"}
          />
        )}
      </Button>
    );
  }

  renderRight() {
    const { rightLabel, rightStyle, onRightPress } = this.props;

    if (!rightLabel) return null;

    return (
      <Button
        style={[styles.toggle, rightStyle]}
        onPress={() => onRightPress && onRightPress()}
      >
        {rightLabel}
      </Button>
    );
  }

  render() {
    const { email, phone, number, secure, error, style, ...props } = this.props;

    const { toggleSecure } = this.state;
    const isSecure = toggleSecure ? false : secure;

    const inputStyles = [
      styles.input,
      error && { borderColor: theme.colors.accent },
      style
    ];

    const inputType = email
      ? "email-address"
      : number
      ? "numeric"
      : phone
      ? "phone-pad"
      : "default";

    return (
      <Block style={{
        backgroundColor: '#f8f8f9',
        width: width/1.35,
        paddingLeft: 15,
        height: 40,
        borderRadius: 45,
        // borderColor: "#707070",
        borderWidth: 0,
        shadowColor: '#DDDDDD' || theme.colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 13,
        elevation: 2
      }} row flex={false} margin={[theme.sizes.base, 0]}>
        {this.renderLabel()}
        {this.renderLeftIcon()}
        <TextInput
          style={inputStyles}
          secureTextEntry={isSecure}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={inputType}
          {...props}
        />
        {this.renderToggle()}
        {this.renderRight()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.black,
    borderRadius: theme.sizes.radius,
    fontSize: theme.sizes.font,
    fontWeight: "500",
    color: theme.colors.black,
    height: theme.sizes.base * 2.5
  },
  toggle: {
    position: "absolute",
    alignItems: "flex-end",
    width: theme.sizes.base * 2,
    height: theme.sizes.base * 2,
    top: theme.sizes.base,
    right: 0
  }
});
