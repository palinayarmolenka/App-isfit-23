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
        return 0.13;
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
                shortInfo: props.shortInfo,
            }
        })}>
            <View style={{ backgroundColor: "white" }}>
                <View style={{
                    backgroundColor: "#FDE8D2",
                    height: height * boxSize(),
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: height * 0.002,
                    marginTop: height * 0.007,
                    marginLeft: width * 0.02,
                    marginRight: width * 0.02,
                    borderRadius: 5,
                    elevation: 1,
                }}>
                    <View style={styles.pictureView}>
                        <Image style={{
                            width: height * imageHeight(),
                            height: height * imageHeight(),
                            borderRadius: 5,
                        }} source={props.logoBox} />
                    </View>
                    <View style={styles.overview}>
                        <Text style={{ fontSize: titleSize(props.title), 
                            paddingBottom: height * 0.01, fontWeight:'500'}}>{props.title}</Text>
                        <Text style={{fontSize: 15, fontStyle:'italic', fontWeight:'200'}}>{props.shortInfo}</Text>
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




const styles = StyleSheet.create({
    overview: {
        paddingTop: height * 0.015,
        flexDirection: "column",
        flex: 1, //To keep text inside window flex 1 has to be set right after the first container
    },
    pictureView: {
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: width * 0.020,
        paddingBottom: 0,
        alignSelf: "center",
    }
});

export default ArticleBox;