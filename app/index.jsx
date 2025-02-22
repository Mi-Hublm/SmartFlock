import { Text, View } from "react-native";
import React from "react";
import Intro1 from "./Intro/Intro1";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
     <Intro1 Navigation={undefined} />
    </View>
  );
}
