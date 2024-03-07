import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";
import { Button } from "galio-framework";


const Payment = () => {
  const [numeroCartao, setNumeroCartao] = useState("");
  const [vencCartao, setVencCartao] = useState("");
  const [nome, setNome] = useState("");
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setNumeroCartao}
          value={numeroCartao}
          placeholder="NUMBER CARD"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          onChangeText={setNome}
          value={nome}
          placeholder="CARDHOLDER NAME"
        />

        <TextInput
          style={styles.input}
          onChangeText={setVencCartao}
          value={vencCartao}
          placeholder="MONTH/YEAR"
          keyboardType="numeric"

        />

    
        <Card nome={nome} vencimento={vencCartao} numcart={numeroCartao}/>
        <Button onlyIcon icon="checkcircle" iconFamily="AntDesign" iconSize={35}  color="transparent" iconColor="black" style={{ width: 40, height: 40 }} onPress={() => Alert.alert('Finalizado')}> </Button>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    width: 300,
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default Payment;
