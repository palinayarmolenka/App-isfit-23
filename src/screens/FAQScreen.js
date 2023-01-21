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
    margin: 10,
  },
  linkText: {
    fontSize: 15,
    color: '#0089E3'
  },
  linkTextDescription: {
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 4,
    paddingBottom: 8
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
        Additional information will be posted on the ISFiT23 website.</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.linkTextDescription}>For more information visit</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.isfit.org/participant-info')} style={{backgroundColor: 'white'}}>
            <Text style={styles.linkText}>isfit.org</Text>
          </TouchableOpacity>
        </View>
      </View>
      {questions.map((question, index) => {
        return (
          <View>
            <Text>{question.category}</Text>
            <FAQQuestion 
              key={index}
              category={question.category}
              title={question.title}
              data={question.data}
              navigation={navigation}
            />
          </View>
        )
      })}
    </ScrollView>
  );
}

