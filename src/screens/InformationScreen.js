import React from "react";
import { Text, View, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, Linking } from "react-native";
import Header from "../components/Header";
import { themeInfo } from "../assets/themeInfo";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const UrlCheck = (link, title) => {
    if (link == null || link == undefined) {
        return;
    }
    else if (title == "ISFiT Report") {
        return (
            <TouchableOpacity onPress={() => Linking.openURL(link)} >
                <Text style={{
                    fontSize: 15,
                    color: "black",
                    fontFamily: "Montserrat_700Bold",
                    marginHorizontal: width * 0.04,
                    textDecorationLine: 'underline',
                    marginBottom: height * 0.05,
                }}>Link to Report</Text>
            </TouchableOpacity>
        );
    }
    else {
        return (
            <TouchableOpacity onPress={() => Linking.openURL(link)} >
                <Text style={{
                    fontSize: 15,
                    color: "black",
                    fontFamily: "Montserrat_700Bold",
                    marginHorizontal: width * 0.04,
                    textDecorationLine: 'underline',
                    marginBottom: height * 0.05,
                }}>Link to article</Text>
            </TouchableOpacity >
        );
    }
}

const magazineBox = (articleType) => {

    if (articleType == "ISFiT Magazine") {
        return (<View >
            <Text style={styles.magazineText}>Read more Articles in the Magazine!</Text>
        </View>
        );
    }
    else {
        return;
    }
}



const InformationScreen = ({ navigation, route }) => {

    //Legge inn riktig tekst osv. 
    const { itemTitle, itemPicture, itemInfo, logoInfo, extraText, url, boldText, shortInfo, author } = route.params.params;

    const Author = (articleType) => {
        if (articleType == "Theme Article") {
            return <Text style={styles.boldtextStyle}>{boldText}</Text>;
        } else if (articleType == "ISFiT Magazine") {
            return <Text style={styles.AuthortextStyle}>{author}</Text>;
        } else {
            return null;
        }

    }

    return <View style={{ flex: 1 }}>
        <Header title="Info" onPress={() => navigation.navigate("Theme")} headerType="ArticleScreen" />
        <ScrollView >
            <View style={styles.titleView}>
                <Text style={styles.titleText}>{itemTitle}</Text>
            </View>
            <Image style={styles.picture} source={itemPicture} />
            <Text style={{ paddingLeft: width * 0.1, fontSize: 12, fontStyle: "italic" }}>{logoInfo}</Text>
            <View>{Author(shortInfo)}</View>
            <Text style={styles.textStyle}>{itemInfo}</Text>
            <View>{UrlCheck(url, shortInfo)}</View>
            <View>{magazineBox(shortInfo)}</View>
        </ScrollView>
    </View >

}

const styles = StyleSheet.create({
    textStyle: {
        lineHeight: 20,
        fontSize: 15,
        marginHorizontal: width * 0.04,
        marginVertical: height * 0.03,
        fontFamily: "Montserrat_300Light",
    },
    AuthortextStyle: {
        lineHeight: 20,
        fontSize: 15,
        marginLeft: width * 0.04,
        marginTop: height * 0.03,
        fontFamily: "Montserrat_300Light",
    },
    boldtextStyle: {
        lineHeight: 20,
        fontSize: 15,
        marginHorizontal: width * 0.04,
        marginTop: height * 0.03,
        fontFamily: "Montserrat_700Bold",
    },
    titleText: {
        fontSize: 18,
        fontFamily: "Montserrat_700Bold",
        paddingHorizontal: width * 0.01
    },
    titleView: {
        alignItems: "center",
        paddingBottom: height * 0.03,
        paddingTop: height * 0.03,
        marginHorizontal: width * 0.01
    },
    picture: {
        alignSelf: "center",
        width: width * 0.8,
        height: height * 0.25,
        marginBottom: height * 0.01,
        borderRadius: 5
    },
    magazineText: {
        fontSize: 15,
        color: "black",
        fontFamily: "Montserrat_700Bold",
        marginHorizontal: width * 0.04,
        marginBottom: height * 0.05
    },
});

export default InformationScreen;
