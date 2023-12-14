import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import HomeScreen from "../views/homeScreen";
import AddScreen from "../views/addScreen";
import EditScreen from "../views/editScreen";



const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Home" component={HomeScreen} options={{
          headerRight: () => (
            <Button>Adicionar</Button>
          ),
        }} />
        <AppStack.Screen name="Add" component={AddScreen} />
        <AppStack.Screen name="Edit" component={EditScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
