import React from 'react'
import {createStackNavigator, createAppContainer} from "react-navigation";
import SplshScreen from "./Root/Screens/SplashScreen";
import HomeScreen from "./Root/Screens/HomeScreen";

console.disableYellowBox = true;

const StackScreen = createStackNavigator({
    SplshScreen: {screen: SplshScreen},
    HomeScreen: {screen: HomeScreen},
}, {
    headerMode: 'none'
});

export default createAppContainer(StackScreen);
