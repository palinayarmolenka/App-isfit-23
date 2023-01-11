import React from "react";
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";

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

const imageHeight = () => {
    if (height > 800) {
        return 0.11;
    }
    else {
        return 0.14;
    }
}


const EventBox = (props) => {
    //makes navigation in EventBox, used to navigate to event information page
    const navigation = useNavigation();


    
    const title = props.title;
    let date = props.date.substring(0,11)
    let time = props.date.substring(17,22);
    return (
        <TouchableOpacity onPress={() => Linking.openURL(props.link)}>
            <View style={{ backgroundColor: "white" }}>
                <View style={{
                    height: height * boxSize(), //0.17 for small phones, 0.12 for large phones.
                    backgroundColor: "#F1EDE2",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: height * 0.007,
                    marginTop: height * 0.007,
                    marginLeft: width * 0.02,
                    marginRight: width * 0.02,
                    borderRadius: 5,
                    shadowColor: 'grey',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    elevation: 1,
                }}>
                    <View style={styles.pictureView}>
                        <Image style={{
                            resizeMode: 'cover',
                            width: height * imageHeight(),
                            height: height * imageHeight(),
                        }} source={{ uri: props.image }} />
                    </View>

                    <View style={styles.overview}>
                        <Text style={{ fontSize: 17}}>{title}</Text>
                        <View style={styles.buttons}>
                            <View style={styles.info}>
                                <Text style={styles.infoText}>
                                    {date}
                                </Text>
                                <Text style={styles.infoText}> {time} CET </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity >
    );
};

//Check for wrong format in title
const titleFormat = (title) => {
    for (var i = 0; i < title.length; i++) {
        if (title[i] == "/") {
            return title.substring(0, i);
        }
        else if (title[i] == ":") {
            if (title[i + 1] == " ") {
                return title.substring(i + 2, title.length);
            }
            else {
                return title.substring(i + 1, title.length);
            }
        }
    }
    return title;
};

//change size of title if it is to long, and if the phone is higher that 800.
const titleSize = (title) => {
    if (title.length > 50) {
        return 10; //small text to make sure it doest move the text out of the event box
    }
    if (title.length > 30) {
        return 12;
    }
    else if (title.length > 25) {
        return 14;
    } else if (title.length > 22 || height > 800) {
        return 17;
    }
    else if (title.length > 16) {
        return 18
    }
    else {
        return 20;
    }
};

styles = StyleSheet.create({
    overview: {
        paddingTop: height * 0.015,
        flexDirection: "column",
        flex: 1, //To keep text inside window flex 1 has to be set right after the first container
    },
    info: {
        flexDirection: "column",
    },
    pictureView: {
        alignSelf: "center",
        paddingTop: height * 0.015,
        paddingLeft: width * 0.017,
        paddingRight: width * 0.017,
        paddingBottom: height * 0.015,
    },
    buttons: {
        paddingTop: height * 0.01,
        flexDirection: "row",
    },
    infoText: {
        fontSize: 15,
    }
});

export default EventBox;