import React, { useContext, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity } from "react-native";
import { UserContext } from "../contexts/UserContext";
import { Button } from 'galio-framework';


const User = () => {
  const { getUser, user,logout } = useContext(UserContext);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.img}
           source={{ uri: user ? user.image : "N/A"}}
          />
    
      <Text>User: {user ? user.username : "N/A"}</Text>

      <Button color="info"
      onPress={logout}
      >Logout</Button>


    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  img:{
    width:150, height:150
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:"center"
  }
});
