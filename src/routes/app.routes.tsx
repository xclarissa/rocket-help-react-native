import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../screens/Home"
import Details from "../screens/Details"
import Register from "../screens/Register"

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();
  return(
    <Navigator>
      <Screen name="home" component={Home}/> 
      <Screen name="new" component={Register}/> 
      <Screen name="details" component={Details}/> 
    </Navigator>
  )
}