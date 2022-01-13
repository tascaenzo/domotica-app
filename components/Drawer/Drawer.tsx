import React, { useRef, useState } from 'react';
import { Animated, Button, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useStyles } from './style';
import AppBar from '../AppBar/AppBar';

import Home from "../../screens/Home/Home";

const Drawer = () => {
  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const styles = useStyles({ showMenu, scaleValue, offsetValue })

  const onOpen = () => {
    Animated.timing(scaleValue, {
      toValue: showMenu ? 1 : 0.88,
      duration: 300,
      useNativeDriver: true
    }).start();

    Animated.timing(offsetValue, {
      toValue: showMenu ? 0 : 230,
      duration: 300,
      useNativeDriver: true
    }).start();

    Animated.timing(closeButtonOffset, {
      toValue: !showMenu ? -30 : 0,
      duration: 300,
      useNativeDriver: true
    }).start();

    setShowMenu(!showMenu);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={styles.animated}>
        <AppBar 
          drawerOpen={showMenu} 
          onPressDrawer={onOpen}
        />

        <View style={styles.screen}>
          <Home />
        </View>

      </Animated.View>
    </SafeAreaView>
  )
}

export default Drawer;
