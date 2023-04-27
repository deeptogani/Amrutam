import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

//Color
import color from '../../../color';

//Icons
import { SvgUri } from 'react-native-svg';
import { icon } from '../../icon';

import moment from 'moment/moment';

export default notificationCard = ({ item }) => {

    return (

        <TouchableOpacity activeOpacity={0.8} style={styles.cardContainer}>

            <View style={styles.iconContainer}>
                <SvgUri uri={icon(item.icon)} height={40} width={40} color={color.primary1} />
            </View>

            <View style={styles.columnContainer}>

                <Text style={styles.text}>{item.text}</Text>

                <Text style={styles.date}>{item.date}</Text>

            </View>

        </TouchableOpacity>

    )

}

const styles = StyleSheet.create({

    cardContainer : {
        minHeight : 100,
        flex : 1,
        maxWidth : '98%',
        alignSelf : 'center',
        borderRadius : 8,
        elevation : 6,
        backgroundColor : color.background,
        flexDirection : 'row',
        marginTop : 10,
        justifyContent : 'center',
    },

    columnContainer : {
        height : '100%', 
        width : '80%', 
        borderBottomRightRadius : 8,
        borderTopRightRadius : 8,
        backgroundColor : color.background,
        paddingRight : '5%',
        justifyContent : 'center',
    },

    iconContainer : {
        width : '20%',
        backgroundColor : color.background,
        justifyContent : 'center',
        alignItems : 'center',
        borderBottomLeftRadius : 8,
        borderTopLeftRadius : 8,
    },

    text : {
        color : color.black,
        fontSize : 12,
        lineHeight : 16,
    },

    date : {
        color : color.secondary,
        fontSize : 9,
        position : 'absolute',
        bottom : 10,
    }

})