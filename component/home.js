import React, {useState} from "react";
import {Button, Text, View, StyleSheet, Pressable, ScrollView, SafeAreaView,} from "react-native";


function HomeComponent({ navigation }){


    const [timesPressed, setTimesPressed] = useState(0);

    let textLog = '';
    if (timesPressed > 1) {
        textLog = timesPressed + 'x onPress';
    } else if (timesPressed > 0) {
        textLog = 'onPress';
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex:1,  flexDirection: "row", justifyContent:"space-between"}}>
                <Pressable style={[styles.box, { backgroundColor: "powderblue",width: 40, height: 40 }]} title="Go to Details" onPress={() => navigation.navigate('Details')}>
                <Text>
                    L.S
                </Text>
            </Pressable>
                <Pressable style={[styles.box, { backgroundColor: "powderblue",width: 40, height: 40 }]} title="Go to Details" onPress={() => navigation.navigate('Details')}>
                    <Text>
                        Opt
                    </Text>
                </Pressable>



            </View>

            <Text style={{fontSize:25}}> Groupes </Text>
            <View style={{flexWrap: "wrap", flexDirection: "row",alignItems: "stretch"}}>
                <View style={{flexWrap: "wrap", flexDirection: "row", justifyContent:"space-around",  width:190 }} >
                    <Pressable style={[styles.box, { backgroundColor: "powderblue",width: 170, height: 170 }]} title="Go to Details" onPress={() => navigation.navigate('Details')}>
                        <Text>
                            hello
                        </Text>
                    </Pressable>
                </View>
                <View style={{flexWrap: "wrap", flexDirection: "row", justifyContent:"space-around", width:200}}>
                    <View style={[styles.box, { backgroundColor: "steelblue" }]} />
                    <View style={[styles.box, { backgroundColor: "powderblue" }]} />
                    <View style={[styles.box, { backgroundColor: "skyblue" }]} />
                    <View style={[styles.box, { backgroundColor: "steelblue" }]} />
                </View>
            </View>



            <View style={{flex:6,  alignItems: "stretch"}}>
                <Text style={{fontSize:25}}> Méssages </Text>
                <ScrollView>
                    <View style={[styles.box2, { backgroundColor: "steelblue" }]} />
                    <View style={[styles.box2, { backgroundColor: "steelblue" }]} />
                    <View style={[styles.box2, { backgroundColor: "steelblue" }]} />
                    <View style={[styles.box2, { backgroundColor: "steelblue" }]} />
                    <View style={[styles.box2, { backgroundColor: "steelblue" }]} />
                    <View style={[styles.box2, { backgroundColor: "steelblue" }]} />
                    <View style={[styles.box2, { backgroundColor: "steelblue" }]} />
                    <View style={[styles.box2, { backgroundColor: "steelblue" }]} />
                    <View style={[styles.box2, { backgroundColor: "steelblue" }]} />
                    <View style={[styles.box2, { backgroundColor: "steelblue" }]} />

                </ScrollView>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,

    },

    box: {
        width: 80,
        height: 80,
        margin:10,
        borderRadius:20,
        justifyContent: "center",
        alignItems: "center"
    },
    box2: {

        height: 60,
        margin:10,
        borderRadius:20,
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

export default HomeComponent;