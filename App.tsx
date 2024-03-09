import { RootSiblingParent } from "react-native-root-siblings";
import { Routes } from "./src/routes";
import { UserContextProvider } from "./src/contexts/UserContext";
import { CartContextProvider } from "./src/contexts/CartContext";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
   
    <RootSiblingParent>
      <UserContextProvider>
        <CartContextProvider>
        <StatusBar backgroundColor="black" style="light"/>
          <Routes />
         
        </CartContextProvider>
      </UserContextProvider>
    </RootSiblingParent>
  
  );
}
