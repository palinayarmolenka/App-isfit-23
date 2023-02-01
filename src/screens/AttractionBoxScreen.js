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
      {attractionMarkers.map((m, i) =>
        <AttractionMarkerBox
          filterKey={m.filterKey}
          title={m.title}
          shortDescription={m.shortDescription}
          pressForMoreInfo={m.pressForMoreInfo}
          photographer={m.photographer}
          info={m.info}
          logo={m.logo}
          information={m.information} 
        />
      )}
    </ScrollView>

  );
}