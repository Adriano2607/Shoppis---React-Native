import { StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../contexts/UserContext";
import { Input, Block } from "galio-framework";
import { Button } from "galio-framework";
import { colors } from "../colors/color";

const Login = () => {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <Input
              style={styles.inputContainer}

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
        style={styles.inputContainer}
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
  
    backgroundColor:colors.corPrincipal
  },
  btn: {
    width: "80%",
  },
  buttonText: {
    color: "#fff",
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  }, inputContainer: {
    width: '80%', 
  },
});

export default Login;
