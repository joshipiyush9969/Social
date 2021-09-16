import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import * as bookActions from "../../source/Component/Redux/action";

const BookDetail = (props) => {
  const itemId = props.route.params.id;
  const dispatch = useDispatch();
  const books = useSelector((x) => x.book.books);
  const cartBooks = useSelector((x) => x.book.cart);
  const book = books.find((x) => x.id === itemId);
  const [added, setAdded] = useState(!props.route.params.added);
  console.log(added);
  let PageCount;
  const addBook = async () => {
    if (book.data.pageCount) {
      PageCount = parseInt(book.data.pageCount);
    } else {
      PageCount = 400;
    }
    dispatch(
      bookActions.addBook(
        book.id,
        book.data.title,
        PageCount,
        book.data.imageLinks.smallThumbnail
      )
    );
    setAdded(true);
  };
  const removebook = async () => {
    dispatch(bookActions.removeBook(book.id));
    setAdded(false);
  };
  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={{ uri: book.data.imageLinks.thumbnail }}
          style={{ height: 300, width: 200 }}
        />
        <Text
          style={{
            fontSize: 23,
            padding: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {book.data.title}
        </Text>

        <Text
          style={{
            margin: 16,
            fontWeight: "bold",
            fontSize: 23,
            color: "grey",
          }}
        >
          ₹ {book.data.pageCount ? book.data.pageCount : "400"}
        </Text>
        <Text style={{ fontSize: 16, margin: 10, textAlign: "center" }}>
          {book.data.description
            ? book.data.description
            : "No description provided"}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            marginHorizontal: 30,
            marginBottom: 30,
            height: 60,
            width: Dimensions.get("screen").width / 1.2,
            justifyContent: "center",
            borderRadius: 15,
          }}
          onPress={added ? removebook : addBook}
        >
          <Text style={{ color: "white", alignSelf: "center" }}>
            {added ? "Remove Book" : " Add to Cart"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default BookDetail;
