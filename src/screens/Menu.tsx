import { FlatList, ActivityIndicator, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ProductDTO } from "../types/Products";
import axios from "axios";
import Toast from "react-native-root-toast";
import { CartContext } from "../contexts/CartContext";
import ItemCard from "../components/ItemCard";
import { Container } from "../stylesCompents/styled";

const Menu = () => {
  const { getCart } = useContext(CartContext);
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const[loading,setLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        await getCart();
        const url = "https://dummyjson.com/products";

        const response = await axios.get<{ products: ProductDTO[] }>(url);
        setProducts(response.data.products);
      } catch (error) {
        Toast.show("Não foi possível recuperar os produtos", {
          duration: 3000,
          position: Toast.positions.BOTTOM,
          shadow: false,
          animation: true,
          hideOnPress: true,
          delay: 0,
          backgroundColor: "red",
        });
      }finally{
        setLoading(false);
      }
    };
    getData();
  }, []);


  return (
   
       <Container>
        {loading ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
         
            <FlatList
              data={products}
              renderItem={({ item }) => <ItemCard product={item} />}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false} 
            />
          
        )}
     </Container>
    
    );
 }
export default Menu;
