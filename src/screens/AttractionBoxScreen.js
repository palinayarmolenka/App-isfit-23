import React, { useEffect, useRef } from "react";
import { View, ScrollView } from "react-native";
import { attractionMarkers } from "../assets/attractionMarkers";
import AttractionMarkerBox from "../components/AttractionMarkerBox";

export default function AttractionBoxScreen({ navigation }) {

  const scrollRef = useRef();

  useEffect(() => {
        navigation.addListener('focus', () => {
          scrollRef.current?.scrollTo({
            y: 0,
            animated: true,
          });
        })
    }, [navigation])

  return (
    <ScrollView ref={scrollRef}>
      {attractionMarkers.map((m) =>
        <AttractionMarkerBox
          key={m.key}
          filterKey={m.filterKey}
          title={m.title}
          shortDescription={m.shortDescription}
          logo={m.logo}
          
          photographer={m.photographer}
          info={m.info}
          information={m.information}
          latLong={m.latLong}
        />
      )}
    </ScrollView>
  );
}