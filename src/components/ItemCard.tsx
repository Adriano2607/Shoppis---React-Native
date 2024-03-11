import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ProductDTO } from "../types/Products";
import { colors } from "../colors/color";

interface Props {
  product: ProductDTO;
}

const ItemCard = ({ product }: Props) => {
  const navigation = useNavigation<any>();
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details",product)}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.img}
            source={{ uri: product.thumbnail }}
          />
        </View>
        <View style={styles.text}>
          <Text style={{fontSize:25,fontWeight:"500",textTransform:'capitalize', color:'white'}}>{product.title}</Text>
          <Text style={{fontStyle:'italic',fontSize:20,fontWeight:'bold', color:'white'}}>$ {product.price} </Text>
          <Text style={{fontStyle:'italic',fontSize:15, color:'white'}}>★{product.rating} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  card:{
    backgroundColor:'black',
    width:'100%',
    height:350,
    borderRadius:10,
    marginVertical:10,
    borderWidth:.5,
    borderColor:'#FFE3F1',
  },
  imageContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  img:{
     width: '100%', 
     height: 200,  
  },
  text:{
    alignItems:'center',
    marginTop:10,
  }
});
