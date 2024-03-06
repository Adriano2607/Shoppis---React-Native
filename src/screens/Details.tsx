import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import { useRoute } from "@react-navigation/native";
import { ProductDTO } from "../types/Products";
import { Button } from 'galio-framework';
import { CartContext } from "../contexts/CartContext";



const Details = () => {
  const route = useRoute<any>()
  
  const {title,price,description,images} = route.params as ProductDTO
  const {addProduct} = useContext(CartContext)

  // tenho que pagar o objeto aqui

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {images ? (
          <Image 
           style={styles.img}
           source={{ uri: images[0]}}
          />
        ) : (
          <Image 
           style={styles.img}
           source={{ uri: images[0]}}
          />
        )
      }
      
          <View style={styles.text}>
          <Text style={{fontSize:25,fontWeight:"500",textTransform:'capitalize'}}>{title}</Text>
          <Text>{description}</Text>
          <Text>$ {price} </Text>
          </View>
     
          <Button color="info"
      
      >Carrinho</Button>

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
    borderColor:'silver'
  },img:{
    width: '100%', 
    height: 150,  
 },  text:{
  alignItems:'center',
  marginTop:25,
}
});
