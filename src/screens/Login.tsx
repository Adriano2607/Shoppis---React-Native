import { StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../contexts/UserContext";
import { Input, Block } from "galio-framework";
import { Button } from "galio-framework";

const Login = () => {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <Input
        placeholder="Username"
        right
        icon="user"
        family="Feather"
        iconSize={15}
        iconColor="blue"
        onChangeText={setUsername}
        value={username}
      />

      <Input
        placeholder="Password"
        password
        viewPass
        value={password}
        onChangeText={setPassword}
        iconColor="blue"
      />

      {/* mudar aqui */}
      <Button
        color="info"
        onPress={() => login("yraigatt3", "sRQxjPfdS")}
        style={styles.btn}
      > LOGIN </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  input: {
    width: "100%",
    height: 50,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#606060",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
  },
  btn: {
    width: "100%",
  },
  buttonText: {
    color: "#fff",
  },
  title: {
    color: "#252525",
    fontSize: 26,
    fontWeight: "bold",
  },
});

export default Login;
