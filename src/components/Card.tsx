import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FC } from "react";

interface Props {
  nome: string;
  vencimento: string;
  numcart: string;
}

const Card: FC<Props> = ({ nome, vencimento, numcart }) => {
  
  const maskCreditCardNumber = (numcart:string) => {
    if (typeof numcart !== 'string') return '';
  
    const cleanNumber = numcart.replace(/\D/g, '');
  
    const maskPattern = '#### #### #### ####';
  
    let maskedNumber = '';
    let index = 0;
  
    for (let i = 0; i < maskPattern.length; i++) {
      if (maskPattern[i] === '#') {
        if (index < cleanNumber.length) {
          maskedNumber += cleanNumber[index++];
        } else {
          maskedNumber += ' ';
        }
      } else {
        maskedNumber += maskPattern[i];
      }
    }
  
    return maskedNumber;
  };

  const maskExpirationDate = (date:string) => {


    const cleanDate = date.replace(/\D/g, '');
  
  
    const formattedDate = cleanDate.replace(/(\d{2})(\d{2})/, '$1/$2');
  
    return formattedDate;
  };

  const maskedCardNumber = maskCreditCardNumber(numcart);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={{ color: 'white' }}>Credit Card</Text>
          <Text style={{ color: 'white' }}>Bank Adriano</Text>
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="credit-card-chip"
            size={40}
            color="gold"
          />
        </View>

        <View style={styles.num}>
         
          <Text style={{ fontSize: 25, color: 'white' }}>{numcart ? maskCreditCardNumber(numcart) : '#### #### #### ####'}</Text>
        </View>

        <View style={styles.info}>
          <Text style={{ color: 'white' }}>{nome}</Text>
          <Text style={{color:'white'}}>{maskExpirationDate(vencimento)}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    minWidth: 320,
    backgroundColor: "black",
    borderRadius: 25,
    padding: 30
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    marginTop: 15,
  },
  num: {
    marginTop: 15,
    alignItems:'center'
  },
  info: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default Card;
