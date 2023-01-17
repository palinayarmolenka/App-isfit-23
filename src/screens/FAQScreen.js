import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import FAQQuestion from '../components/FAQQuestion';
import { faqQuestions } from './data/faqData';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#0197CC',
  }
});

export default function FAQScreen({ navigation }) {

  const [questions, setQuestions] = useState(faqQuestions)
  
  return (
    <ScrollView style={styles.container}>
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
