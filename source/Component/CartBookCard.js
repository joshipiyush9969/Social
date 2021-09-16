import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { useDispatch } from "react-redux";
import * as bookActions from "../../source/Component/Redux/action";
const CartBookCard = (props) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(bookActions.removeBook(props.id));
  };
  return (
    <View style={{ flexDirection: "row", margin: 20 }}>
      <Image
        source={{ uri: props.image }}
        style={{ height: 150, width: 100 }}
      />
      <View
        style={{ width: Dimensions.get("window").width * 0.4, paddingLeft: 20 }}
      >
        <Text
          numberOfLines={2}
          style={{ fontWeight: "bold", color: "black", fontSize: 18 }}
        >
          {props.title}
        </Text>
        <TouchableOpacity onPress={removeHandler}>
          <AntDesign name={"delete"} size={23} style={{ padding: 10 }} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          marginTop: 16,
          paddingLeft: 55,
          fontSize: 18,
          color: "grey",
          fontWeight: "bold",
        }}
      >
        ₹ {props.pageCount}
      </Text>
    </View>
  );
};

export default CartBookCard;
