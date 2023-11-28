import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../views/homeScreen";

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Inicio" component={HomeScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
