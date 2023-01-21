import React, { useEffect, useState } from "react";
import { LayoutAnimation, Text, StyleSheet, TouchableOpacity, View, UIManager } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: "#011F4B",
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: '#daf6fe',
    },
    parentHr:{
        height:1,
        color: '#ffffff',
        width:'100%'
    },
    child:{
        backgroundColor: '#f2fcff',
        padding:16,
    }
    
});

export default function FAQQuestion({ title, data, navigation }) {

    const [expand, setExpand] = useState(false)

    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        setExpand(expand => !expand)
    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            setExpand(false)
        })
    }, [navigation])
    
    return (
        <View>
            <TouchableOpacity 
                style={styles.row} 
                ref={this} 
                onPress={() => toggleExpand()}
            >
                <Text style={[styles.title, styles.font]}>{title}</Text>
                <Icon 
                    name={expand ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                    size={30}
                    color='#011F4B'
                />
            </TouchableOpacity>
            <View style={styles.parentHr} />
            {expand && (
                <View style={styles.child}>
                    <Text>{data}</Text>
                </View>
            )}
        </View>
    )
}