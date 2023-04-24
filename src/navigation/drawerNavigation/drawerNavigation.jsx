import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

//screens
import TabNavigation from '../../navigation/tabNavigation/tabNavigation';
import StackNavigation from "../../navigation/stackNavigation/stackNavigation";

export default DrawerNavigator = () => {

    return (

        <Drawer.Navigator initialRouteName="Tab" screenOptions={{ headerShown:false }}>
            <Drawer.Screen name='Tab' component={TabNavigation}/>
            <Drawer.Screen name='Blogs' component={StackNavigation}/>
        </Drawer.Navigator>

    )

}