import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

//component for the marker locations. View title, text and image.
const MarkerInfo = (props) => {
    return <View>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{props.title}</Text> 
        </View>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={props.bilde} />
            <Text style={{ paddingLeft: width * 0.05, fontSize: 12, fontStyle: "italic" }}>{props.photographer} </Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.textStyle}>{props.information}</Text>
        </View>
    </View>
};
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    imageContainer: {
        alignContent: 'center',
        paddingTop: height * 0.02,
        width: width,

    },
    textContainer: {
        paddingTop: height * 0.001,
        width: width,
        textAlign: "center",
    },
    headerContainer: {
        paddingTop: 0,
        paddingLeft: width * 0.05,
        paddingRight: width * 0.05,
        alignContent: 'center',
    },
    headerText: {
        alignSelf: 'center',
        paddingTop: height * 0.02,
        fontSize: 24,
        letterSpacing: 1,
        fontWeight: '500',
    },
    textStyle: {
        textAlign: 'left',
        paddingTop: height * 0.02,
        margin: width * 0.053,
        fontSize: 15,
        fontWeight: '300'
    }
});

export default MarkerInfo;