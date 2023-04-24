import { useState, useEffect } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

//Colors
import color from '../../color';

//SvgUri
import { SvgUri } from 'react-native-svg';
import { icon } from '../icon';

//Drawer Navigation
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

//Nuggets Dummy Data
import { cartNotification } from "../../dummydata/nuggets";

export default HeaderComponent = (props) => {
    const [ cartItems, setCartItems ] = useState(0);

    const navigation = useNavigation();

    useEffect(() => {

        //Mocking Data Fetch For Cart Items
        setCartItems(cartNotification);

    }, [cartNotification]);

    const openDrawer = () => {

        navigation.dispatch(DrawerActions.openDrawer());

    }

    return (

        <View style={styles.rowContainer}>

            {props.showTitle ? 
                
                (

                    <>

                        <TouchableOpacity>
                            <SvgUri 
                                uri={icon("leftArrow")}
                                height={28}
                                width={28}
                                color={color.primary1}
                            />

                        </TouchableOpacity>

                        <Text style={styles.title}>{props.title}</Text>

                    </>

                ) : (

                    <SvgUri 
                        uri={icon("menu")}
                        height={32}
                        width={32}
                        style={styles.menuIcon}
                        onPress={openDrawer}
                    />

                )

            }

            <SvgUri 
                        uri={icon("search")}
                        height={32}
                        width={32}
                        style={styles.searchBtn}
                        color={color.secondary}
            />

            <View>

                <SvgUri 
                        uri={icon("basket")}
                        height={32}
                        width={32}
                        color={color.secondary}
                />

                {cartItems > 0 &&
                    <View style={styles.cartItemsContainer}>
                        <Text style={styles.cartItems}>{cartItems}</Text>
                    </View>
                }

            </View>

            {props.showUserProfile && 
                <Image 
                source={require("../../../assets/images/user.jpg")} 
                style={styles.profileImage}
                resizeMode="contain"/>
            }

        </View>

    )

}

const styles = StyleSheet.create({

    rowContainer : {
        flexDirection : 'row',
        paddingTop : '5%'
    },

    title : {
        fontFamily : 'Lato-Bold',
        fontSize : 16,
        color : color.primary1,
        marginLeft : 10,
        fontWeight : 'bold',
        marginRight : 'auto',
        marginTop : 2
    },

    menuIcon : {
        marginRight : 'auto',
        top : -5,
    },

    searchBtn : {
        marginRight : 15
    },

    cartItemsContainer : {
        height : 15,
        width : 15,
        borderRadius : 10,
        backgroundColor : color.primary1,
        position : 'absolute',
        right : 0,
        top : -8
    },

    cartItems : {
        color : color.background,
        fontSize : 8,
        textAlign : 'center',
        alignItems : 'center',
    },

    profileImage : {
        height : 30,
        width : 30,
        borderRadius : 8,
        marginTop : 5,
        marginLeft : 15,
        bottom : 5
    },

})