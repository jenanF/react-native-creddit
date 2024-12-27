import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Details from '../Components/Details';
import Home from '../Components/Home';
import Comment from '../Components/Comment';

const Stack = createStackNavigator();

const StackNav = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name='Comment' component={Comment} />
        </Stack.Navigator>
    )
}

export default StackNav