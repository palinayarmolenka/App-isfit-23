import React from "react";
import { Text, View, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, Linking } from "react-native";
import Header from "../components/Header";
import { themeInfo } from "../assets/themeInfo";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;


const InformationScreen = ({ navigation, route }) => {

    //Legge inn riktig tekst osv. 
    const { itemTitle, itemPicture, itemInfo, logoInfo, } = route.params.params;


    return <View style={{ flex: 1, backgroundColor: "#e2d0e5" }}>
        <Header title="Info" onPress={() => navigation.navigate("Theme")} headerType="ArticleScreen" />
        <ScrollView>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>{itemTitle}</Text>
            </View>
            <Image style={styles.picture} source={itemPicture} />
            <Text style={{ paddingLeft: width * 0.1, fontSize: 12, fontStyle: "italic" }}>{logoInfo}</Text>
            <Text style={styles.textStyle}>{itemInfo}</Text>
        </ScrollView>
    </View >

}

const styles = StyleSheet.create({
    textStyle: {
        lineHeight: 20,
        fontSize: 17,
        marginHorizontal: width * 0.04,
        marginVertical: height * 0.03,
        fontWeight:'300'
    },
    titleText: {
        fontSize: 20,
        paddingHorizontal: width * 0.01,
        fontWeight:'500'
    },
    titleView: {
        alignItems: "center",
        paddingBottom: height * 0.03,
        paddingTop: height * 0.03,
        marginHorizontal: width * 0.01
    },
    picture: {
        alignSelf: "center",
        width: width * 0.70,
        height: height * 0.32,
        marginBottom: height * 0.01,
        borderRadius: 5
    },
});

export default InformationScreen;
