import React from 'react';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import {Routes} from "./Routes";

import {MainScreen} from "../components/MainScreen";
import {View} from "react-native";

const BaseNavigator = createStackNavigator({
    [Routes.MainFlow]: MainScreen
}, {
    headerMode: 'none',
    cardStyle: {
        backgroundColor: '#FAFAFA'
    }
});

export {BaseNavigator};