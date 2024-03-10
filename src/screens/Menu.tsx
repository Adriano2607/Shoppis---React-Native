import { FlatList, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ProductDTO } from "../types/Products";
import axios from "axios";
import Toast from "react-native-root-toast";
import { CartContext } from "../contexts/CartContext";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemCard from "../components/ItemCard";
import { colors } from "../colors/color";
import { Container } from "../stylesCompents/styled";

const Menu = () => {
  const { getCart } = useContext(CartContext);
  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    const getData = async () => {
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
      }
    };
    getData();
  }, []);

  return (
   <Container>
      <FlatList
        data={products}
        renderItem={({ item }) => <ItemCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false} 
      />
    </Container>
  );
};

export default Menu;
