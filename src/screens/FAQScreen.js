import React from 'react';
import {StyleSheet, View, ScrollView } from 'react-native';
import FAQComponent from '../components/FAQComponent';

export default function FAQScreen () {

  const questions = [
    {
      title: "What is ISFiT?",
      data: "The world's largest internation studnent festival?",
      },
      {
      title: "When is ISFiT?",
      data: "Febuary 2023!"
      },
      {
      title: "Who is the leader of ISFiT?",
      data: "Febuary 2023!"
      },
      {
        title: "When is ISFiT?",
        data: "Febuary 2023!"
      },
      {
        title: "When is ISFiT?",
        data: "Febuary 2023!"
      },
      {
        title: "When is ISFiT?",
        data: "Febuary 2023!"
      },
      {
        title: "When is ISFiT?",
        data: "Febuary 2023!"
      },
      {
        title: "When is ISFiT?",
        data: "Febuary 2023!"
      },
      {
        title: "When is ISFiT?",
        data: "Febuary 2023!"
      },
      {
        title: "When is ISFiT?",
        data: "Febuary 2023!"
      },
      {
        title: "When is ISFiT?",
        data: "Febuary 2023!"
      },
      {
        title: "When is ISFiT?",
        data: "Febuary 2023!"
      },
      {
        title: "When is ISFiT?",
        data: "Febuary 2023!"
      },
      {
        title: "When is ISFiT?",
        data: "Febuary 2023!"
      },
      {
        title: "When is ISFiT?",
        data: "Febuary 2023!"
      },
      {
        title: "When is ISFiT?",
        data: "Febuary 2023!"
      },
      {
        title: "When is ISFiT?",
        data: "Febuary 2023!"
      },

  ];

  renderAccordians=()=> {
    const items = [];
    for (item of questions) {
        items.push(
            <FAQComponent 
                title = {item.title}
                data = {item.data}
            />
        );
    }
    return items;
}

  return (
    <ScrollView style={styles.container}>
      { renderAccordians() }
    </ScrollView>
    );


}

const styles = StyleSheet.create({
  container: {
   flex:1,
   paddingTop:2,
   backgroundColor:'#37D275',
  }
});