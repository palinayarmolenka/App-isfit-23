import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

//component for the marker locations. View title, text and image.
const MarkerInfo = (props) => {
    return <View >
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={props.bilde} />
            <Text style={{ paddingLeft: width * 0.15, fontSize: 12, fontStyle: "italic" }}>Source: {props.photographer} </Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.textStyle}>{props.information}</Text>
        </View>
    </View>
};
const styles = StyleSheet.create({
    image: {
        width: width * 0.7,
        height: width * 0.5,
        alignSelf: 'center',
        borderRadius: 5
    },
    imageContainer: {
        justifyContent: 'center',
        paddingTop: height * 0.07,
    },
    textContainer: {
        paddingTop: height * 0.04,
    },
    textStyle: {
        // fontFamily: "Montserrat_300Light",
        textAlign: 'left',
        paddingTop: height * 0.02,
        margin: width * 0.053,
    }
});

export default MarkerInfo;