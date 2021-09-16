import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import HeaderHome from "../Component/HeaderHome";
import CartBookCard from "../Component/CartBookCard";
import { FlatList } from "react-native-gesture-handler";
import * as bookActions from "../../source/Component/Redux/action";

const CartScreen = () => {
  const cart = useSelector((x) => x.book.cart);
  const dispatch = useDispatch();
  const total = useSelector((x) => x.book.total);
  const BougthHandler = async () => {
    try {
      await dispatch(bookActions.createOrder());
      dispatch(bookActions.cleanCart());
    } catch (error) {}
  };
  return (
    <SafeAreaView>
      <HeaderHome title={"Shopping Cart"} Cart={true} />
      <View style={{ height: 500 }}>
        {cart && (
          <FlatList
            data={cart}
            keyExtractor={(x) => x.id}
            renderItem={({ item, index }) => {
              return (
                <CartBookCard
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  pageCount={item.TotalpageCount}
                />
              );
            }}
          />
        )}
      </View>
      <View
        style={{
          backgroundColor: "darkgrey",
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
        }}
      >
        <View style={{ margin: 20, marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16, padding: 10 }}>
            No. of books: {cart.length}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              paddingTop: 10,
              paddingHorizontal: 10,
            }}
          >
            TotalPrice: ₹ {total}
          </Text>
        </View>
        <TouchableOpacity
          onPress={BougthHandler}
          style={{
            backgroundColor: "black",
            marginHorizontal: 30,
            marginBottom: 30,
            height: 60,
            justifyContent: "center",
            borderRadius: 15,
          }}
        >
          <Text style={{ color: "white", fontSize: 18, alignSelf: "center" }}>
            Buy now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
