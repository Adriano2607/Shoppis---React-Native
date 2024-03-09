import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
import Menu from "../screens/Menu";
import Details from "../screens/Details";
import Cart from "../screens/Cart";
import Payment from "../screens/Payment";
import MenuHeader from "../components/MenuHeader";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import User from "../screens/User";
import { colors } from "../colors/color";

const Stack = createNativeStackNavigator();

export const HomeRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          headerTitle: "Lista de Produtos",
          headerTintColor: "white",

          headerRight: () => <MenuHeader />,
          headerStyle: {
            backgroundColor: colors.corPrincipal,
          },
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerTitle: "Detalhes",
          headerTintColor: "white",

          headerRight: () => <MenuHeader />,
          headerStyle: {
            backgroundColor: colors.corPrincipal,
          },
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTintColor: "white",
          headerTitle: "Carrinho",
          headerStyle: {
            backgroundColor: colors.corPrincipal,
          },
        }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          headerTintColor: "white",
          headerTitle: "Pagamento",
          headerStyle: {
            backgroundColor: colors.corPrincipal,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export const AppRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: colors.corPrincipal,
        tabBarInactiveBackgroundColor: colors.corPrincipal,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeRoutes}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="home" size={30} color="white" />
          ),
          headerTransparent: true,
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="person" size={30} color="white" />
          ),
          headerTransparent: true,
        }}
      />
    </Tab.Navigator>
  );
};
