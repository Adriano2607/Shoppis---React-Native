import {
  StyleSheet,
  Text,
  View,
  Image,
  VirtualizedList,
  Alert,
} from "react-native";
import React, { useContext } from "react";
import { ProductDTO } from "../types/Products";
import { Button } from "galio-framework";
import { CartContext } from "../contexts/CartContext";
import PagerView from "react-native-pager-view";
import Toast from "react-native-root-toast";
import { CardDesign, Container } from "../stylesCompents/styled";
import { colors } from "../colors/color";

const Details = ({ route }: any) => {
  const product: ProductDTO = route.params;

  const { addProduct } = useContext(CartContext);

  const confirm = (product: ProductDTO) => {
    addProduct(product);
    Toast.show("Adicionado com Sucesso !!!", {
      duration: 1500,
      position: Toast.positions.CENTER,
      shadow: false,
      animation: true,
      hideOnPress: true,
      delay: 0,
      backgroundColor: "#00C9C8",
      textColor: "black",
    });
  };

  return (
    <Container>
      <CardDesign>
        <PagerView style={styles.viewPager} initialPage={0}>
          {product.images.map((image, index) => (
            <View key={index + 1}>
              <Image source={{ uri: image }} style={styles.img} />
            </View>
          ))}
        </PagerView>
        <View style={styles.text}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: "500",
                textTransform: "capitalize",
                color: "white",
              }}
            >
              {product.title}
            </Text>
            <Text
              style={{ fontStyle: "italic", marginTop: 10, color: "white" }}
            >
              {product.description}
            </Text>
          </View>

          <View style={{ alignItems: "center", width: "90%" }}>
            <Text style={{ fontSize: 30, color: "white" }}>
              $ {product.price}{" "}
            </Text>
            <Button
              textStyle={{ color: "black" }}
              style={styles.btn}
              capitalize
              icon="shoppingcart"
              iconFamily="antdesign"
              iconSize={16}
              iconColor="black"
              color="#FFE3F1"
              onPress={() => confirm(product)}
            >
              Carrinho
            </Button>
          </View>
        </View>
      </CardDesign>
    </Container>
  );
};

export default Details;

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: "100%",
  },
});
