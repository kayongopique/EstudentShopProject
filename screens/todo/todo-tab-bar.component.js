import React from 'react';
import { TabBar, Tab, Divider, TabElement } from '@ui-kitten/components';
import { SafeAreaLayout, SaveAreaInset, SafeAreaLayoutElement } from '../../components/safe-area-layout.component';
import { Toolbar } from '../../components/toolbar.component';

export const TodoTabBar = (props) => {

  const onTabSelect = (index) => {
    const selectedTabRoute = props.state.routeNames[index];
    props.navigation.navigate(selectedTabRoute);
  };

  const createNavigationTabForRoute = (route) => {
    const { options } = props.descriptors[route.key];
    return (
      <Tab
        key={route.key}
        title={options.title}
        icon={options.tabBarIcon}
      />
    );
  };

  return (
    <SafeAreaLayout insets={SaveAreaInset.TOP}>
      <Toolbar title='React Navigation Ex 🐱'/>
      <TabBar selectedIndex={props.state.index} onSelect={onTabSelect}>
        {props.state.routes.map(createNavigationTabForRoute)}
      </TabBar>
      <Divider/>
    </SafeAreaLayout>
  );
};