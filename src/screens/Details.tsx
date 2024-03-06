import { StyleSheet, Text, View, Image, VirtualizedList } from "react-native";
import React, { useContext } from "react";
import { useRoute } from "@react-navigation/native";
import { ProductDTO } from "../types/Products";
import { Button } from 'galio-framework';
import { CartContext } from "../contexts/CartContext";
import Carousel from 'react-native-snap-carousel';
import Toast from "react-native-root-toast";




const Details = ({route}:any) => {
  const product:ProductDTO = route.params
  
 
  const {addProduct} = useContext(CartContext)

  const confirm = (product:ProductDTO) => {
    addProduct(product);
    Toast.show("Tudo Certo Sangue Bom", {
      duration: 2000,
      position: Toast.positions.CENTER,
      shadow: false,
      animation: true,
      hideOnPress: true,
      delay: 0,
      backgroundColor: "green",
    });
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {product.images ? (
          <Image 
           style={styles.img}
           source={{ uri: product.images[0]}}
          />
        ) : (
          <Image 
           style={styles.img}
           source={{ uri: product.images[0]}}
          />
        )
      }


      <View style={styles.text}>
        <View style={{alignItems:'center',marginTop:25}}>
        <Text style={{fontSize:25,fontWeight:"500",textTransform:'capitalize'}}>{product.title}</Text>
          <Text>{product.description}</Text>
        </View>

        <View style={{alignItems:'center'}}>
        <Text style={{fontSize:30}}>$ {product.price} </Text>
        <Button capitalize icon="shoppingcart" iconFamily="antdesign" iconSize={16}  color="info" onPress={() => confirm(product) }>Carrinho</Button>
  

        </View>
         
         
          </View>
      
  
      

      </View>
     
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  }, card:{
    backgroundColor:'white',
    width:350,
    height:580,
    borderRadius:10,
    marginVertical:10,
    borderWidth:1,
    borderColor:'silver',
    alignItems:'center',
    justifyContent:'center'
  },img:{
    width: '100%', 
    height: 250,  
 },  text:{
  flex:1,
  justifyContent:'space-between',
  alignItems:'center'
}
});
