import React from 'react'
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../Components/Home';
import Add from '../Components/Add';
import StackNav from './StackNav';

const MainNavigation = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={StackNav} />
            <Tab.Screen name="Add" component={Add} />
        </Tab.Navigator>
    )
}

export default MainNavigation