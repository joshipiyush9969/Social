import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import * as bookActions from "../../source/Component/Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";

const BookCard = ({ item, Click }) => {
  const navigation = useNavigation();
  const books = useSelector((x) => x.book.cart);
  const check = books?.includes((x) => x.id === item.id);
  console.log(check);
  const [added, setAdded] = useState(true);
  const dispatch = useDispatch();
  let PageCount;
  const addBook = (item) => {
    if (item.data.pageCount) {
      PageCount = parseInt(item.data.pageCount);
    } else {
      PageCount = 400;
    }
    dispatch(
      bookActions.addBook(
        item.id,
        item.data.title,
        PageCount,
        item.data.imageLinks.smallThumbnail
      )
    );
    setAdded(false);
  };
  const removeBook = (item) => {
    dispatch(bookActions.removeBook(item.id));
    setAdded(true);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Detail", { id: item.id, added: added });
          console.log(item.id);
        }}
        style={{
          padding: 12,
          justifyContent: "space-between",
          flexDirection: "row",
          backgroundColor: "white",
        }}
      >
        <Image
          source={{ uri: item.data.imageLinks.smallThumbnail }}
          style={{ height: 150, width: 100 }}
        />
        <View style={{ width: Dimensions.get("window").width * 0.4 }}>
          <Text
            numberOfLines={2}
            style={{ fontWeight: "bold", color: "black" }}
          >
            {item.data.title}
          </Text>
          <Text style={{ marginTop: 16 }}>
            ₹ {item.data.pageCount ? item.data.pageCount : 400}
          </Text>
        </View>
        {added ? (
          <AntDesign
            onPress={() => addBook(item)}
            name="pluscircle"
            size={24}
            color="black"
          />
        ) : (
          <AntDesign
            onPress={() => removeBook(item)}
            name="minuscircle"
            size={24}
            color="black"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: Dimensions.get("window").width * 0.9,
    padding: 18,
  },
});

export default BookCard;
