import React from "react";
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, Linking, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const boxSize = () => {
    if (height > 800) {
        return 0.13;
    }
    else {
        return 0.17;
    }
}


const EventBox = (props) => {
    //makes navigation in EventBox, used to navigate to event information page
    const navigation = useNavigation();

    const title = props.title;
    let d = props.date;
    let day = d.toString().substring(0,3);
    let month = d.toString().substring(4,7);
    let date = d.toString().substring(8,10);
    let time = d.toString().substring(16,21);
    return (
        <TouchableOpacity onPress={() => Linking.openURL(props.link)}>
            <View style={{ backgroundColor: "white" }}>
                <View style={{
                    height: height * boxSize(), //0.17 for small phones, 0.12 for large phones.
                    backgroundColor: "#e5e0f0",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: height * 0.004,
                    marginTop: height * 0.004,
                    marginLeft: width * 0.02,
                    marginRight: width * 0.02,
                    borderRadius: 10,
                    elevation: 1,
                }}>
                    <View style={styles.overview}>
                        <Text style={{ fontSize: 18, margin: 5, marginTop: 3, fontWeight:'450'}}>{title}</Text>
                        <View style={styles.buttons}>
                            <View style={styles.info}>
                                <Text style={styles.infoText}>
                                    {day} {date}. {month} {'\n'}
                                    {time} CET 
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.icon}>
                        <MaterialIcons name={'keyboard-arrow-right'} size={30} color="#E63872"/>
                    </View>

                </View>
            </View>
        </TouchableOpacity >
    );
};


const styles = StyleSheet.create({
    overview: {
        paddingTop: height * 0.015,
        flexDirection: "column",
        flex: 1, //To keep text inside window flex 1 has to be set right after the first container
        paddingLeft: 14,
    },
    info: {
        flexDirection: "column",
    },
    buttons: {
        paddingTop: height * 0.01,
        flexDirection: "row",
    },
    infoText: {
        flexDirection: "column",
        fontSize: 15,
        marginLeft: 5,
        marginTop: 0,
        margin: 3,
        fontWeight:'300'

    },
    icon: {
        alignSelf: 'center',
        paddingRight: 10
    }
});

export default EventBox;