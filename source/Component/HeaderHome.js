import { View, Text, Dimensions } from "react-native";
import React from "react";

const HeaderHome = (props) => {
  return (
    <View style={{ width: Dimensions.get("window").width, padding: 16 }}>
      <Text
        style={{
          fontStyle: "normal",
          fontSize: props.Cart ? 30 : 18,
          marginBottom: 18,
          fontWeight: props.Cart ? "bold" : "normal",
        }}
      >
        {props.title}
      </Text>
      {!props.Cart && (
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>List</Text>
      )}
      {props.Cart && (
        <Text
          style={{
            fontWeight: "bold",
            paddingLeft: Dimensions.get("screen").width / 1.3,
            fontSize: 16,
          }}
        >
          Amount
        </Text>
      )}
    </View>
  );
};

export default HeaderHome;
