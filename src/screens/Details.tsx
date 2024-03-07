import { StyleSheet, Text, View, Image, VirtualizedList, Alert } from "react-native";
import React, { useContext } from "react";
import { ProductDTO } from "../types/Products";
import { Button } from 'galio-framework';
import { CartContext } from "../contexts/CartContext";
import PagerView from "react-native-pager-view";





const Details = ({ route }: any) => {
  const product: ProductDTO = route.params


  const { addProduct } = useContext(CartContext)

  const confirm = (product: ProductDTO) => {
    addProduct(product);
    Alert.alert(
      '', 
      'Adicionado', 
      [],
      {
        cancelable:true
      }
    );
    
  };


  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <PagerView style={styles.viewPager} initialPage={0}>
      {product.images.map((image, index) => (
        <View key={index + 1}>
          <Image source={{ uri: image }} style={styles.img} />
        </View>
      ))}
    </PagerView>
        <View style={styles.text}>
          <View style={{ alignItems: 'center', marginTop: 25 }}>
            <Text style={{ fontSize: 25, fontWeight: "500", textTransform: 'capitalize' }}>{product.title}</Text>
            <Text>{product.description}</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>$ {product.price} </Text>
            <Button capitalize icon="shoppingcart" iconFamily="antdesign" iconSize={16} color="info" onPress={() => confirm(product)}>Carrinho</Button>


          </View>


        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }, card: {
    backgroundColor: 'white',
    width: 350,
    height: 580,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'silver',
  
  }, img: {
    width: '100%',
    height: 300,
    resizeMode:'cover',
  }, text: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  }, viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
