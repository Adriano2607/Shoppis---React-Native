import { Alert, FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { Button } from "galio-framework";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../colors/color";
import { Container } from "../stylesCompents/styled";

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
      <Container>
<Text style={{color:'white'}}>O carrinho está vazio.</Text>
      </Container>
        
     
    );
  }

  return (
    <Container>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false} 
        renderItem={({ item }) => (
        
            <View style={styles.card}>
              <Image
                source={{ uri: item.product.thumbnail }}
                style={{ height: '100%', width: 100, borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10, }}
              />
              <View style={styles.text}>
                <Text>★{item.product.brand}</Text>
              <Text style={{ fontSize: 25 }}>{item.product.title}</Text>
              <Text style={{ textTransform: "capitalize" }}>{item.product.category}</Text>
              <Text>Stock: {item.product.stock}</Text>
              <Text style={{fontStyle:'italic'}}>QTD: {item.quantity}</Text>
              <Text style={{fontSize:20}}>${item.product.price}</Text>
              </View>
              <Button style={styles.btn} onlyIcon icon="closecircleo" iconFamily="AntDesign" color="transparent" iconColor="red"  iconSize={27} onPress={() => removeProduct(item.product.id)}>warning</Button>

            </View>
          
        )}
        keyExtractor={(item) => item.product.id.toString()}
      />
      <Text style={{ fontWeight: "900", fontSize: 20,color:'white' }}>Total: $ {totalPrice} </Text>
      <Button
        uppercase
        icon="payment"
        iconFamily="MaterialIcons"
        iconSize={15}
        iconColor='#2C3136'
        color="white"
        onPress={() => navigation.navigate("Payment")}
        textStyle={{ color: '#2C3136' }} 
      >
       
       Checkout
        
      </Button>
    </Container>
  );
};

export default CartCard;

const styles = StyleSheet.create({
 
  card: {
    backgroundColor: "white",
    width: 350,
    height: 150,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection:'row',
    position:'relative',
    borderWidth:.8,
    borderColor:colors.borderColor

  },text:{
    marginLeft:25
  },btn:{
    position:'absolute',
      right:-20,
    top:-20,
    
  }
});
