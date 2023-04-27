import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Colors
import color from "../../color";

//Screens
import HomeScreen from '../../screens/tabScreens/HomeScreen/HomeScreen';
import BulletinScreen from '../../screens/tabScreens/BulletinScreen/BulletinScreen';

//Icons
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Nuggets Dummy Data
import { userNotification } from "../../dummydata/nuggets";
 
const { width } = Dimensions.get('screen');

import { useNavigation } from '@react-navigation/native';

//Tab Navigator
const Tab = createBottomTabNavigator();

const ICON_SIZE = 26

export default TabNavigator = () => {

    const [bulletinNotifications, setBulletinNotifications] = useState(0);

    const [isHome, setIsHome] = useState(true);
    const [isStore, setIsStore] = useState(false);
    const [isOrder, setIsOrder] = useState(false);
    const [isConsult, setIsConsult] = useState(false);
    const [isBulletin, setIsBulletin] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {

        //Notifications being received
        setBulletinNotifications(userNotification)

    }, [userNotification]);

    const bottomBorderStyle = {
        borderBottomWidth : 3,
        borderBottomColor : color.primary1
    }

    const navigateScreen = (index) => {

        setIsHome(false);
        setIsStore(false);
        setIsOrder(false);
        setIsConsult(false);
        setIsBulletin(false);

        switch(index){
            case 0:
                setIsHome(true);
                navigation.navigate('Home')
                break;
            case 1:
                setIsStore(true);
                break;
            case 2:
                setIsOrder(true);
                break;
            case 3:
                setIsConsult(true);
                break;
            case 4:
                setIsBulletin(true);
                navigation.navigate('Bullet')
                break;
            default :
                setIsHome(true)
        }

    }

    return (

        <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown : false }}
            tabBar={() => {

                return (

                    <View style={styles.tabContainer}>

                        <TouchableOpacity style={[styles.tab, isHome ? bottomBorderStyle : null ]} onPress={() => navigateScreen(0)}>

                            <Feather name='sun' color={isHome ? color.primary1 : color.secondary} size={ICON_SIZE} />
                            <Text style={styles.tabTitle}>Home</Text>

                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.tab, isStore ? bottomBorderStyle : null ]} onPress={() => navigateScreen(1)}>

                            <FontAwesome5 name='store' color={isStore ? color.primary1 : color.secondary} size={ICON_SIZE} />
                            <Text style={styles.tabTitle}>Store</Text>

                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.tab, isOrder ? bottomBorderStyle : null ]} onPress={() => navigateScreen(2)}>

                            <FontAwesome5 name='list-alt' color={isOrder ? color.primary1 : color.secondary} size={ICON_SIZE} />
                            <Text style={styles.tabTitle}>Orders</Text>

                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.tab, isConsult ? bottomBorderStyle : null ]} onPress={() => navigateScreen(3)}>

                            <Fontisto name='test-bottle' color={isConsult ? color.primary1 : color.secondary} size={ICON_SIZE} />
                            <Text style={styles.tabTitle}>Consult</Text>

                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.tab, isBulletin ? bottomBorderStyle : null ]} onPress={() => navigateScreen(4, navigation)}>

                            <View>
                                <MaterialCommunityIcons name='flower-tulip-outline' color={isBulletin ? color.primary1 : color.secondary} size={ICON_SIZE} />
                                <Text style={styles.tabTitle}>Bulletin</Text>

                                {bulletinNotifications > 0 && 
                                    <View style={styles.notifications}>
                                        <Text style={styles.notificationsText}>{bulletinNotifications}</Text>
                                    </View>
                                }
                                
                            </View>

                        </TouchableOpacity>

                    </View>

                )

            }}
        >

            <Tab.Screen name='Home' component={HomeScreen}/>

            <Tab.Screen name='Home2' component={HomeScreen}/>

            <Tab.Screen name='Home3' component={HomeScreen}/>

            <Tab.Screen name='Bullet' component={BulletinScreen}/>

        </Tab.Navigator>

    )

}

const styles = StyleSheet.create({

    tabContainer : {
        height : 50,
        width :width * 0.9,
        position : 'absolute',
        bottom : 85,
        borderRadius : 12,
        elevation : 6,
        backgroundColor : color.background,
        alignSelf : 'center',
        justifyContent : 'space-around',
        alignItems : 'center',
        flexDirection : 'row'
    },

    tab : {
        height : '90%',
        width : 30,
        justifyContent : 'center',
        alignItems : 'center',
    },
    
    tabTitle : {
        fontSize : 8,
        textAlign : 'center',
        color : color.primary1
    },

    notifications : {
        height : 15,
        width : 15,
        borderRadius : 10,
        backgroundColor : color.primary1,
        position : 'absolute',
        right : 0,
        top : -8
    },

    notificationsText : {
        color : color.background,
        fontSize : 8,
        textAlign : 'center',
        alignItems : 'center',
    }

})