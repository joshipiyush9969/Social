import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderHome from "../Component/HeaderHome";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";

import { useDispatch, useSelector } from "react-redux";
import * as bookActions from "../../source/Component/Redux/action";
import BookCard from "../Component/BookCard";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const fetchBookList = async () => {
    await dispatch(bookActions.fetchBook());
  };
  useEffect(() => {
    fetchBookList();
  }, []);

  const books = useSelector((x) => x.book.books);
  const cart = useSelector((x) => x.book.cart);
  const name = useSelector((x) => x.book.name);
  
  console.log("Cart", cart);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderHome title={`Hi ${name}`} Cart={false} />
      <FlatList
        data={books}
        keyExtractor={(x) => x.id}
        renderItem={({ item, index }) => {
          return <BookCard item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
