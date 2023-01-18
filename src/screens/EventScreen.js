import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import * as rssParser from "react-native-rss-parser";
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import EventBox from '../components/EventBox';

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
            description: item.description,
            date: item.published,
            link: item.links[0].url,
            image: item.image
          })
        })
      })
      const newDateArray = []
      data.map((item, index) => {
        if (item.date.substring(8, 11) === "Feb") {
          newDateArray.push({
            ...item,
            date: new Date("2023",  "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(item.date.substring(8, 11)) / 3, item.date.substring(5, 7))
          })
        }
      })

      newDateArray.sort((a, b) => {
        return new Date(a.date) - new Date(b.date)
      })

      newDateArray.map(item => {
        console.log(item.date)
      })
      setSamfundetEvents(data)
    }

  useEffect(() => {
    getFeed()
  }, [])

  return (
    <ScrollView>
      {samfundetEvents.map((event, index) => 
        <EventBox
          key = {index}
          title = {event.title}
          date = {event.date}
          link = {event.link}
          image = {event.image}
        />
       
        )}
    </ScrollView>
  )
}