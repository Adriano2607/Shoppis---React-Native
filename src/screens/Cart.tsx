import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { Button } from "galio-framework";
import { useNavigation } from "@react-navigation/native";

const CartCard = () => {
  const { getCart,cart,removeProduct } = useContext(CartContext);
  const navigation = useNavigation<any>();

  useEffect(() => {
    getCart();
  }, []);

  const totalPrice = cart.reduce((total, item) => {
    const price = item.product.price;

    const subtotal = price * item.quantity;

    return total + subtotal;
  }, 0);


if (cart.length === 0) {
  return (
    <View style={styles.container}>
      <Text>O carrinho está vazio.</Text>
    </View>
  );
}


  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.card}>
              <Text>{item.product.title}</Text>
              <Text>$ {item.product.price}</Text>
              <Text style={{textTransform:'capitalize'}}>{item.product.category}</Text>
              <Text>QTD: {item.quantity}</Text>
              <Button onlyIcon icon="remove-circle" iconFamily="Ionicons" iconSize={25}  iconColor="#fff" style={{ width: 40, height: 40 }} onPress={() => removeProduct(item.product.id)}>warning</Button>

            </View>
          </View>
        )}
        keyExtractor={(item) => item.product.id.toString()}
      />
      <Text style={{ fontWeight: "900" ,fontSize:25}}>Total: $ {totalPrice} </Text>
      <Button uppercase icon="payment" iconFamily="MaterialIcons" iconSize={15}  color="black" onPress={() => navigation.navigate('Payment')} >Payment</Button>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    width: 150,
    height: 150,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "silver",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
