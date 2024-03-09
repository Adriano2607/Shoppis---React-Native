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
import { colors } from "../colors/color";

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
        <Text style={{textTransform:'capitalize',fontSize:25,color:'white'}}>{`${user ? user.firstName : "N/A"} ${user ? user.lastName : "N/A"}`} </Text>
        <Text style={{fontStyle:'italic',color:'white'}}>{user ? user.username : "N/A"}</Text>
       

         <Button style={{marginTop:15}} color="white" onPress={logout}>
             <Text style={{color:'black',fontSize:20}}>Logout</Text> 
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
    backgroundColor:colors.corPrincipal
  },
  card: {
    alignItems:'center'
  },
  containerimg:{
    borderRadius:250,
    borderWidth: 1,
    borderColor: "white",
    alignItems:'center',
    padding:25,
    marginBottom:15
  }
   

});
