import React from "react";
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

//set correct box size based on height of mobile
const boxSize = () => {
    if (height > 800) {
        return 0.13;
    }
    else {
        return 0.17;
    }
}

//sets correct image height based on height of mobile
const imageHeight = () => {
    if (height > 800) {
        return 0.11;
    }
    else {
        return 0.14;
    }
}

const ArticleBox = (props) => {
    //makes navigation in EventBox, used to navigate to event information page
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Info", {
            params: {
                itemPicture: props.logo,
                itemInfo: props.info,
                itemTitle: props.title,
                logoInfo: props.logoInfo,
                extraText: props.extraText,
                url: props.url,
                boldText: props.boldText,
                shortInfo: props.shortInfo,
                author: props.author
            }
        })}>
            <View style={{ backgroundColor: "white" }}>
                <View style={{
                    backgroundColor: "#D4DBBD",
                    height: height * boxSize(),
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
                            width: height * imageHeight(),
                            height: height * imageHeight(),
                        }} source={props.logoBox} />
                    </View>
                    <View style={styles.overview}>
                        <Text style={{ fontSize: titleSize(props.title), fontFamily: "Montserrat_700Bold", paddingBottom: height * 0.01 }}>{props.title}</Text>
                        <Text style={styles.infoText}>{props.shortInfo}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const titleSize = (title) => {
    if (title.length > 90) {
        return 13;
    }
    if (title.length > 25) {
        return 14;
    }
    else {
        return 17;
    }
};




styles = StyleSheet.create({
    overview: {
        paddingTop: height * 0.015,
        flexDirection: "column",
        flex: 1, //To keep text inside window flex 1 has to be set right after the first container
    },
    pictureView: {
        paddingTop: height * 0.015,
        paddingLeft: width * 0.017,
        paddingRight: width * 0.017,
        paddingBottom: height * 0.015,
        alignSelf: "center",
    },
    infoText: {
        fontSize: 15,
        fontFamily: "Montserrat_300Light"
    }
});

export default ArticleBox;