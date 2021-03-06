import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import Log from "./screen/LogScreen";
import Intro from "./IntroPage";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import HomeScreenComponent from "./screen/HomeScreen";
import MessageScreen from "./screen/MessageScreen";

const Stack = createNativeStackNavigator();

function MainComponent(){

    return (
        <NavigationContainer>

            <Stack.Navigator  screenOptions={{
                headerShown: false
            }} initialRouteName="Log" >
                <Stack.Screen  name="Log" component={Log} />
                <Stack.Screen   name="Home" component={HomeScreenComponent} />
                <Stack.Screen name="Details" component={Intro} />
                <Stack.Screen options={{headerShown: true}}  name="Message" component={MessageScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    )

}

export default MainComponent;