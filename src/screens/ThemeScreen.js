import React, { useEffect, useRef } from "react";
import { View, ScrollView } from "react-native";
import ArticleBox from "../components/ArticleBox";
import { themeInfo } from "../assets/themeInfo";

export default function ThemeScreen({ navigation }) {

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
      {themeInfo.map((m, i) =>
        <ArticleBox
          title={m.title}
          info={m.information}
          key={m.key} //changed to m.key instead of i to try to fix render issues
          logo={m.logo}
          shortInfo={m.shortInfo}
          logoInfo={m.logoinfo}
          extraText={m.extraText}
          url={m.url}
          boldText={m.boldText}
          logoBox={m.logoBox}
          author={m.author}
        />
      )}
    </ScrollView>

  );
}

