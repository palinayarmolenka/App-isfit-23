import React from "react";
import { View, ScrollView } from "react-native";
import Header from "../components/Header";
import ArticleBox from "../components/ArticleBox";
import { themeInfo } from "../assets/themeInfo";

export default function ThemeScreen() {
  return (
    <ScrollView >
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

