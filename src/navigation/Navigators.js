import React from 'react';
import {createStackNavigator} from 'react-navigation';

import {Routes} from "./Routes";
import {Colors} from "../utils";
import {MainScreen} from "../components/MainScreen";

const BaseNavigator = createStackNavigator({
    [Routes.MainFlow]: MainScreen
}, {
    headerMode: 'none',
    cardStyle: {
        backgroundColor: Colors.bgApp
    }
});

export {BaseNavigator};