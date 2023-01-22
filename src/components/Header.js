import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const Header = (props) => {
  
  return <View style={styles.ArticleHeader}>
    <View style={styles.textCentering}>
      <Text style={styles.articleText}>POLARIZATION</Text>
    </View>
    <TouchableOpacity onPress={props.onPress} >
      <View style={styles.largeTouch}>
        <Ionicons name="ios-arrow-back" size={35} color="#F1EDE2" />
      </View>
    </TouchableOpacity>
  </View>
};



const styles = StyleSheet.create({
  ArticleHeader: {
    alignItems: "center",
    height: height * 0.14,
    flexDirection: "row",
    backgroundColor: "#E63872",
    fontSize: 20,
  },
  articleText: {
    alignSelf: "center",
    paddingTop: height * 0.05,
    fontSize: 30,
    color: "#F1EDE2",
  },
  textCentering: {
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%'
  },
  largeTouch: {
    paddingTop: height * 0.02,
    flex: 1,
    flexGrow: 1.1,
    justifyContent: 'center',
    paddingLeft: width / 20,
    backgroundColor: 'transparent',
    paddingRight: width / 3, //nice size for touchable back button
    paddingTop: height * 0.05,
  },
});

export default Header;