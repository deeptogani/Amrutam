import { createStackNavigator } from "@react-navigation/stack";

import BlogScreen from "../../screens/drawerScreens/BlogScreen/BlogScreen";
import BlogDetails from "../../screens/stackScreens/BlogDetails/BlogDetails";

const Stack = createStackNavigator();

export default StackNavigator = () => {

    return (

        <Stack.Navigator initialRouteName="Blog" screenOptions={{ headerShown : false }}>

            <Stack.Screen name="Blog" component={BlogScreen} />

            <Stack.Screen name="BlogDetails" component={BlogDetails}/>

        </Stack.Navigator>

    )

}