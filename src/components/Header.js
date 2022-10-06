import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const Header = (props) => {
  switch (props.headerType) {
    case "Home":
      return (
        <View style={styles.homeHeader}>
          <View>
            <Text style={styles.homeText} >{props.headerText}</Text>
          </View>
        </View>
      );
    case "SidePage": {
      return (
        <View style={styles.defaultHeader}>
          <View style={styles.textCentering}>
            <Text style={{
              fontSize: titleSize(props.headerText),
              alignSelf: "center",
              fontFamily: "Montserrat_700Bold",
              color: "white",
              paddingTop: height * 0.02,
            }} >{props.headerText}</Text>
          </View>
          <TouchableOpacity onPress={props.onPress}>
            <View style={styles.largeTouch}>
              <Ionicons name="ios-arrow-back" size={35} color="#F1EDE2" />
            </View>
          </TouchableOpacity>
        </View >
      );
    }
    case "ArticleScreen": {
      return <View style={styles.ArticleHeader}>
        <View style={styles.textCentering}>
          <Text style={styles.articleText}>Creating Knowledge</Text>
        </View>
        <TouchableOpacity onPress={props.onPress} >
          <View style={styles.largeTouch}>
            <Ionicons name="ios-arrow-back" size={35} color="#F1EDE2" />
          </View>
        </TouchableOpacity>
      </View>

    }
    default:
      return <View style={styles.defaultHeader}>
        <TouchableOpacity style={styles.iconDefault} onPress={props.onPress} >
          <Ionicons name="ios-arrow-back" size={35} color="#F1EDE2" />
        </TouchableOpacity>
      </View>
  }
};

//change size of title if it is to long, might need to better for som lengths
const titleSize = (title) => {
  if (title.length > 20) {
    return 18;
  } else if (title.length > 16) {
    return 22;
  }
  else {
    return 25;
  }
};



const styles = StyleSheet.create({
  homeHeader: {
    backgroundColor: "#40B4A3",
    justifyContent: "center",
    alignItems: "center", //horizontal align
    height: height * 0.14,
    paddingTop: height * 0.03,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative",
    flexDirection: "row",

  },
  defaultHeader: {
    alignItems: "center",
    height: height * 0.14,
    flexDirection: "row",
    backgroundColor: "#40B4A3",
  },
  ArticleHeader: {
    alignItems: "center",
    height: height * 0.14,
    flexDirection: "row",
    backgroundColor: "#40B4A3",
  },
  homeText: {
    justifyContent: "center",
    fontSize: 40,
    color: "#FFFF",
    fontFamily: 'BillyOhio',
  },
  articleText: {
    alignSelf: "center",
    paddingTop: height * 0.02,
    fontSize: 40,
    color: "#F1EDE2",
    fontFamily: 'BillyOhio',
  },
  iconHome: {
    paddingLeft: width * 0.1,
    paddingRight: width * 0.03
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
  },
});

export default Header;