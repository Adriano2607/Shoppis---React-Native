import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";
import { Button } from "galio-framework";
import { Input, Block } from "galio-framework";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserContext } from "../contexts/UserContext";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../colors/color";
import { CartContext } from "../contexts/CartContext";

const Payment = () => {
  const [numeroCartao, setNumeroCartao] = useState("");
  const [vencCartao, setVencCartao] = useState("");
  const [nome, setNome] = useState("");
  const nav = useNavigation<any>();
  const { cart } = useContext(CartContext);
  const [modalVisible, setModalVisible] = useState(false);

  const valida = async () => {
    if (numeroCartao && vencCartao && nome) {
      setModalVisible(true);
    } else {
      Alert.alert("Preencha os dados");
    }
  };

  const finaliza = async () => {
    setModalVisible(false);
    await AsyncStorage.removeItem("@cart");
    nav.navigate("Menu");
  };

  const totalPrice = cart.reduce((total, item) => {
    const price = item.product.price;

    const subtotal = price * item.quantity;

    return total + subtotal;
  }, 0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.corPrincipal }}>
      <View style={styles.container}>
        <Input
          type="numeric"
          placeholder="NUMBER CARD"
          right
          icon="credit-card"
          family="FontAwesome"
          iconSize={25}
          iconColor="black"
          onChangeText={setNumeroCartao}
          value={numeroCartao}
        />

        <Input
          type="name-phone-pad"
          placeholder="CARDHOLDER NAME"
          right
          icon="credit-card"
          family="FontAwesome"
          iconSize={25}
          iconColor="black"
          onChangeText={setNome}
          value={nome}
        />

        <Input
          type="numeric"
          placeholder="MONTH/YEAR"
          right
          icon="credit-card"
          family="FontAwesome"
          iconSize={25}
          iconColor="black"
          onChangeText={setVencCartao}
          value={vencCartao}
        />

        <Card nome={nome} vencimento={vencCartao} numcart={numeroCartao} />
        <Button
          onlyIcon
          icon="checkcircle"
          iconFamily="AntDesign"
          iconSize={35}
          color="transparent"
          iconColor={colors.corBtn}
          style={{ width: 40, height: 40 }}
          onPress={() => valida()}
        ></Button>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={{ fontWeight: "900", fontSize: 20, color: "white" }}>
            Total: $ {totalPrice}
          </Text>

          <Image
            style={{ resizeMode: "center", height: "25%" }}
            source={require("../../assets/giphy.gif")}
          />

          <Button
            textStyle={{ color: "black" }}
            capitalize
            color={colors.corBtn}
            onPress={() => finaliza()}
          >
            Finalizar
          </Button>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
});

export default Payment;
