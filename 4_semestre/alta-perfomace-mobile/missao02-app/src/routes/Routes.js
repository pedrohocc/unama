import { NavigationContainer } from "@react-navigation/native";
import DataScreen from "../screens/DataScreen";
import InitialScreen from "../screens/InitialScreen";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "lightblue",
            opacity: 1,
          },
          headerTitleStyle: {
            opacity: 0
          }
        }}
      >
        <AppStack.Screen name="Inicio" component={InitialScreen} />
        <AppStack.Screen name="Região" component={DataScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
