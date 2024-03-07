import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Input } from "galio-framework";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Payment = () => {
  const [numeroCartao, setNumeroCartao] = useState('')
  const [vencCartao, setVencCartao] = useState('')
  const [cvvCartao, setcvvCartao] = useState('')
  return (
    <SafeAreaView>
      <TextInput
        onChangeText={setNumeroCartao}
        value={numeroCartao}
        placeholder="Card Number"
      />

      <TextInput
        onChangeText={setVencCartao}
        value={vencCartao}
        placeholder="Cartao Vencimento"
      />

      <TextInput
        onChangeText={setcvvCartao}
        value={cvvCartao}
        placeholder="CVV"
      />
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({});
