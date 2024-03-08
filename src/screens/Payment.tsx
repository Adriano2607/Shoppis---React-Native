import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";
import { Button } from "galio-framework";
import { Input, Block } from "galio-framework";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserContext } from "../contexts/UserContext";
import { useNavigation } from "@react-navigation/native";

const Payment = () => {
  const [numeroCartao, setNumeroCartao] = useState("");
  const [vencCartao, setVencCartao] = useState("");
  const [nome, setNome] = useState("");
const nav = useNavigation<any>()
  

const valida = async () => {
  if (numeroCartao && vencCartao && nome) {
    Alert.alert("Obrigado pela Compra !!!", "", [
      { text: "Menu", onPress: async () => {
        await AsyncStorage.removeItem("@cart");
        nav.navigate("Menu");
      }}
    ]);
  } else {
    Alert.alert("Preencha os dados");
  }
};


  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          iconColor="black"
          style={{ width: 40, height: 40 }}
          onPress={() => valida()}
        >
          {" "}
        </Button>
      </View>
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
});

export default Payment;
