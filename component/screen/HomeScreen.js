import React from "react";

import {Button, StyleSheet, Text, View} from "react-native";
import Log from "./LogScreen";
import Intro from "../IntroPage";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeComponent from "../home";

const Tab = createBottomTabNavigator();
function HomeScreenComponent({ navigation }){


    return (
        <Tab.Navigator initialRouteName="Details" >
            <Tab.Screen options={{headerShown: false}} name="Home" component={HomeComponent} />
            <Tab.Screen options={{headerShown: false}} name="Details" component={Intro} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    wrapperCustom: {
        borderRadius: 8,
        padding: 6
    },
    logBox: {
        padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Btn: {
        borderColor: 'white',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default HomeScreenComponent;