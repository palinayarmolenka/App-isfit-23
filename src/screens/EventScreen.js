import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as rssParser from "react-native-rss-parser";

export default function EventScreen () {

    const [samfundetEvents, setSamfundetEvents] = useState([])

    const getFeed = async () => {
      const data = []

      await fetch("http://www.samfundet.no/rss")
      .then((response) => response.text())
      .then((responseData) =>
        //states which type of data we want to use in the app
        rssParser.parse(responseData, [
          "body",
          "agelimit",
          "location",
          "category",
          "link",
        ])
      ).then(rss => {
        rss.items.map((item) => {
          data.push({
            title: item.title,
            desciption: item.description,
            date: item.published,
            link: item.links[0].url
          })
        })
      })

      setSamfundetEvents(data)
    }

  useEffect(() => {
    getFeed()
  }, [])

  return (
    <View>
      <Text>Event screen!asfoihaoigfhioahf</Text>
      {samfundetEvents.map((event, index) => {
        return (
          <View key={index}>
            <Text>{event.title}</Text>
            <Text>{event.desciption}</Text>
            <Text>{event.date}</Text>
            <Text>{event.link}</Text>
          </View>
        )
      })}
    </View>
  )
}