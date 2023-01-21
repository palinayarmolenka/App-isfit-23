import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import * as rssParser from "react-native-rss-parser";
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import EventBox from '../components/EventBox';
import { staticEvents } from './data/staticEvents';

export default function EventScreen () {

    const [samfundetEvents, setSamfundetEvents] = useState([])
    const [samfundetGroups, setSamfundetGroups] = useState([])

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

      data.push(...staticEvents)

      const newDateArray = []
      data.map((item, index) => {
        if (item.date.substring(8, 11) === "Feb" && item.date.substring(5, 7) >= 9 && item.date.substring(5, 7) <= 19) {
          newDateArray.push({
            ...item,
            date: new Date("2023",  "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(item.date.substring(8, 11)) / 3, item.date.substring(5, 7), item.date.substring(17,19), item.date.substring(20,22))
          })
        }
      })

      newDateArray.sort((a, b) => {
        return new Date(a.date) - new Date(b.date)
      })

      setSamfundetEvents(newDateArray)

      const groups = newDateArray.reduce((groups, item) => {
        const date = item.date.toString().substring(0, 16)
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(item)
        return groups
      }, {})

      const groupArrays = Object.keys(groups).map((date) => {
        return {
          date,
          events: groups[date]
        }
      })

      setSamfundetGroups(groupArrays)
    }

  useEffect(() => {
    getFeed()
  }, [])

  return (
    <View>
      <View style={styles.filterContainer}>
    
          <TouchableOpacity style={styles.filterButton}
          onPress={() => this.setState({filterKey: "Favorites"})}>
            <Text style={{alignSelf: 'center', fontSize: 15}}>All Events</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterButton}
          onPress={() => this.setState({filterKey: "Favorites"})}>
            <Text style={{alignSelf: 'center', fontSize: 15}}>Favorites</Text>
          </TouchableOpacity>

      </View>
      <ScrollView>
        {samfundetGroups.map((group, i) => {
          return (
            <View key={i}>
              <Text style={styles.dateTitle}>{group.date}</Text>
              {group.events.length > 0 && group.events.map((itm, j) => {
                return (<EventBox 
                  key={j}
                  title={itm.title}
                  date = {itm.date}
                  link = {itm.link}
                  image = {itm.image}
                />)
              })}
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  filterButton: {
    alignSelf: 'center',
    elevation: 4,
    backgroundColor: "#F78D1F",
    borderColor: "#E63872",
    borderRadius: 20,
    borderWidth: 2,
    paddingVertical: 11,
    paddingHorizontal: 15,
    width: 200,
  },
  filterContainer: {
    height: 55, 
    backgroundColor: "#FFFFFF", 
    flexDirection: 'row', 
    alignItems: 'stretch',
    paddingTop: 2,
    justifyContent: 'space-evenly'
  },
  dateTitle: {
    fontSize: 20,
    backgroundColor:"#FFFFFF",
    paddingTop: 4,
    paddingHorizontal: 15
  }
})