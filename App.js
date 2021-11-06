import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { AppRoute } from './navigation/app-routes';
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { mapping, light, dark } from "@eva-design/eva";
import {AppNavigator} from "./navigation/app.navigator"

const heartIcons = ["😻", "💖", "😍", "🥰", "😍", "💝", "😘", "💓", "💕", "🐱"];
const themes = {
  light: {
    theme: light,
    icon: "sun",
    text: "LIGHT",
  },
  dark: {
    theme: dark,
    icon: "moon",
    text: "DARK",
  },
};



const renderIcon = ({ name, style }) => (
  <Icon {...style} name={name} />
);

const CustomButtonWithIcon = ({
  accessibilityRole,
  accessibilityLabel,
  icon,
  iconStyle,
  onPress,
  text,
  style,
}) => {
  const ButtonIcon = () => renderIcon({ name: icon, style: iconStyle });
  return (
    <Button
      style={style}
      icon={ButtonIcon}
      onPress={onPress}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel}
    >
      {text}
    </Button>
  );
};

const App = () => {
  const [icon, setIcon] = useState(heartIcons[0]);
  const [themeName, setThemeName] = useState("light");
  const theme = themes[themeName].theme;

  const changeIcon = () => {
    const index = Math.floor(Math.random() * heartIcons.length);
    setIcon(heartIcons[index]);
  };

  const changeTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
  };

  const { text } = themeName === "light" ? themes.dark : themes.light;

  // This value is used to determine the initial screen
  const isAuthorized = true;


  return (
    <React.Fragment>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider
      mapping={mapping}
      theme={light}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppNavigator initialRouteName={isAuthorized ? AppRoute.HOME : AppRoute.AUTH}/>
        </NavigationContainer>
      </SafeAreaProvider>
    </ApplicationProvider>
  </React.Fragment>
  );
};


export default App;