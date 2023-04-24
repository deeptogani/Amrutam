import { useState, useEffect } from 'react';

import { View, Text, StyleSheet,  TouchableOpacity, Dimensions } from 'react-native';

//Colors
import color from '../../../color';

//Components
import NoNotifications from '../../../components/bulletinComponents/noNotifications/noNotifications';
import NotificationsList from '../../../components/bulletinComponents/notificationsList/notificationsList';

//Dummy Data
import { notifications } from '../../../dummydata/notifications';

import HeaderComponent from '../../../components/headerComponent/headerComponent';

const { width } = Dimensions.get('screen');

export default BulletinScreen = () => {

    const [isNotifications, setIsNotifications] = useState(true);
    const [isChats, setIsChats] = useState(false);

    const [notificationsData, setNotificationsData] = useState([]);

    useEffect(() => {

        setNotificationsData(notifications);

    }, []);

    return (

        <View style={styles.screen}>

            <HeaderComponent showTitle={true} title={"Bulletin"} showUserProfile={false} />

            <View style={styles.btnContainer}>

                <TouchableOpacity 
                    onPress={() => {
                        setIsNotifications(true)
                        setIsChats(false)
                    }}
                    style={[
                        styles.btn, 
                        { backgroundColor : isNotifications ? color.primary1 : color.primary2 }
                    ]}>
                    <Text style={[
                        styles.btnText, 
                        { color : isNotifications ? color.background : color.black }
                    ]}>Notifications</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => {
                        setIsNotifications(false)
                        setIsChats(true)
                    }}
                    style={[
                        styles.btn, 
                        { backgroundColor : !isNotifications ? color.primary1 : color.primary2 }
                    ]}>
                    <Text style={[
                        styles.btnText, 
                        { color : !isNotifications ? color.background : color.black }
                    ]}>Chats</Text>
                </TouchableOpacity>

            </View>
            
            {

                isNotifications && (

                    notifications.length > 0 ? (
                        
                        <NotificationsList data={notificationsData} />

                    ) : (

                        <NoNotifications />

                    )


                )

            }

        </View>

    )

}

const styles = StyleSheet.create({
    
    screen : {
        flex : 1,
        backgroundColor : color.background,
        paddingHorizontal : '4%'
    },

    btnContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 20
    },

    btn : {
        height : 40,
        width : (width*0.96) / 2 - 12, 
        borderRadius : 8,
        justifyContent : 'center',
        elevation : 6
    },

    btnText : {
        fontSize : 14,
        letterSpacing : 0.5,
        fontWeight : '400',
        textAlign : 'center',
    },

})