import React, {useState} from "react";
import {
    Button, Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import {Colors} from "react-native/Libraries/NewAppScreen";


const Section = ({children, title}): Node => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
};


function Intro ({ navigation }){

    const isDarkMode = useColorScheme() === 'dark';

    const [timesPressed, setTimesPressed] = useState(0);

    let textLog = '';
    if (timesPressed > 1) {
        textLog = timesPressed + 'x onPress';
    } else if (timesPressed > 0) {
        textLog = 'onPress';
    }

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };


    return(
        <View style={styles.container}>

            <Text> we started here</Text>

            <Pressable
                onPress={() => {
                    setTimesPressed((current) => current + 1);
                }}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? 'rgb(210, 230, 255)'
                            : 'red'
                    },
                    styles.wrapperCustom
                ]}>
                {({ pressed }) => (
                    <Text>
                        {pressed ? 'Pressed!' : 'Press Me'}
                    </Text>
                )}
            </Pressable>
            <View style={styles.logBox}>
                <Text testID="pressable_press_console">{textLog}</Text>
            </View>

            <Pressable onPress={() => {
                setTimesPressed((current) => current - current);
            }}>
                <Text>
                    reaload
                </Text>


            </Pressable>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Home')}
            />

        </View>

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

export default Intro;