import { Link } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FAQQuestion from '../components/FAQQuestion';
import { faqQuestions } from './data/faqData';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0197CC',
  },
  descriptionText: {
    fontSize: 15,
    margin: 7,
  },
  linkText: {
    fontSize: 15,
    color: '#0089E3',
    margin: 7,
    paddingBottom: 5
  },
  descriptionTextContainer: {
    backgroundColor: '#FFFFFF'
  }
});

export default function FAQScreen({ navigation }) {

  const [questions, setQuestions] = useState(faqQuestions)
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.descriptionTextContainer}>
        <Text style={styles.descriptionText}>Welcome to the information page for participants! Here you can find some practical information regarding the festival. 
        Additional information will be posted on the ISFiT23 website. For more information visit</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.isfit.org/participant-info')} style={{backgroundColor: 'white'}}>
          <Text style={styles.linkText}>isfit.org</Text>
        </TouchableOpacity>
      </View>
      {questions.map((question, index) => {
        return (
          <FAQQuestion 
            key={index}
            title={question.title}
            data={question.data}
            navigation={navigation}
          />
        )
      })}
    </ScrollView>
  );
}
