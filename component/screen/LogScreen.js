import React from "react";

import {Button, Text, View} from "react-native";

function LogComponent({ navigation }){

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> Log page </Text>
            <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
        </View>

    )

}

export default LogComponent;