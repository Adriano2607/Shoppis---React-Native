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
          <Text style={{fontSize:25,fontWeight:"500",textTransform:'capitalize'}}>{product.title}</Text>
          <Text style={{fontStyle:'italic',fontSize:15,fontWeight:'bold'}}>$ {product.price} </Text>
          <Text style={{fontStyle:'italic',fontSize:15}}>★{product.rating} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  card:{
    backgroundColor:'white',
    width:300,
    height:280,
    borderRadius:10,
    marginVertical:10,
    borderWidth:.8,
    borderColor:colors.borderColor
  },
  imageContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  img:{
     width: '100%', 
     height: 150,  
  },
  text:{
    alignItems:'center',
    marginTop:10,
  }
});
