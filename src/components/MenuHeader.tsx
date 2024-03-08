import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome5  } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MenuHeader = () => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
      <FontAwesome5  name="shopping-cart" size={25} color="black" />
    </TouchableOpacity>
  );
};

export default MenuHeader;

const styles = StyleSheet.create({});
