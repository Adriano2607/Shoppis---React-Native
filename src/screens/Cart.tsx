import { Alert, FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { Button } from "galio-framework";
import { useNavigation } from "@react-navigation/native";

const CartCard = () => {
  const { getCart, cart, removeProduct } = useContext(CartContext);
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
        showsVerticalScrollIndicator={false} 
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.card}>
              <Image
                source={{ uri: item.product.thumbnail }}
                style={{ height: '100%', width: 100 }}
              />
              <View style={styles.text}>
                <Text>★{item.product.brand}</Text>
              <Text style={{ fontSize: 25 }}>{item.product.title}</Text>
              <Text style={{ textTransform: "capitalize" }}>{item.product.category}</Text>
     
              <Text>QTD: {item.quantity}</Text>
              <Text style={{fontSize:20}}>$ {item.product.price}</Text>
              </View>
              <Button style={styles.btn} onlyIcon icon="closecircleo" iconFamily="AntDesign" color="transparent" iconColor="red"  iconSize={20} onPress={() => removeProduct(item.product.id)}>warning</Button>

            </View>
          </View>
        )}
        keyExtractor={(item) => item.product.id.toString()}
      />
      <Text style={{ fontWeight: "900", fontSize: 25 }}>
        Total: $ {totalPrice}{" "}
      </Text>
      <Button
        uppercase
        icon="payment"
        iconFamily="MaterialIcons"
        iconSize={15}
        color="info"
        onPress={() => navigation.navigate("Payment")}
      >
        Payment
      </Button>
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
    width: 350,
    height: 150,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "silver",
    flexDirection:'row',
    position:'relative',

  },text:{
    marginLeft:25
  },btn:{
    position:'absolute',
    right:0,
    top:0,
    width:20,
    height:22,
  }
});
