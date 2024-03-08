import React, { useContext, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { UserContext } from "../contexts/UserContext";
import { Button } from "galio-framework";

const User = () => {
  const { getUser, user, logout } = useContext(UserContext);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.containerimg}>
        <Image style={styles.img} source={{ uri: user ? user.image : "N/A" }} />
        </View>
      

        <Text>User:{" "}{user ? user.username : "N/A"}</Text>
        <Text style={{textTransform:'capitalize'}}>Name:{" "}{`${user ? user.firstName : "N/A"} ${user ? user.lastName : "N/A"}`}
        </Text>
        <Text style={{textTransform:'capitalize'}}>Gender:{" "}{user ? user.gender : "N/A"}</Text>
        <Text>Email: {user ? user.email : "N/A"}</Text>

        <Button style={{marginTop:15}} color="info" onPress={logout}>
          Logout
        </Button>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "silver",
    padding: 35,
    alignItems:'center'
  },containerimg:{
    borderRadius:250,
    borderWidth: 1,
    borderColor: "black",
    alignItems:'center',
    padding:25,
    marginBottom:15
  }
});
