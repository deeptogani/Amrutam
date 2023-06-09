import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

//color
import color from '../../../color';

import moment from 'moment/moment';

const { width } = Dimensions.get('screen');

export default Article = (props) => {

    const formattedDate = moment(props.data.published_at).utcOffset('+05:30').format('D MMM YYYY');

    return (

        <View style={[styles.card, {marginBottom : props.index === (props.numberOfBlogs-1) ? 20 : 10 } ]}>

            {
                props.data.hasOwnProperty("image") ? (
                <Image 
                    source={{uri : props.data.image.src}}
                    style={styles.img}
                />
                ) : (
                    null
                )
            }
            

            <View style={styles.columnContainer}>

                <Text numberOfLines={2} ellipsizeMode='tail' style={styles.title}>{props.data.title}</Text>

                <View style={styles.rowContainer}>
                    <Text style={styles.author}>{props.data.author}</Text>
                    <Text style={styles.date}>{formattedDate}</Text>
                </View>

            </View>

        </View>

    )

}

const styles = StyleSheet.create({

    card : {
        height : 130,
        width : '98%',
        borderRadius : 8,
        backgroundColor : color.background,
        flexDirection : 'row',
        elevation : 6,
        alignSelf : 'center'
    },

    img : {
        height : '100%',
        width : '35%',
        borderTopLeftRadius : 8,
        borderBottomLeftRadius : 8
    },

    columnContainer : {
        width : '65%',
        paddingLeft : 20,
        paddingRight : width*0.1,
        paddingTop : 20,
    },

    rowContainer : {
        width : '100%',
        flexDirection : 'row',
        paddingBottom : 30,
        position : 'absolute',
        bottom : 0,
        marginLeft : 20
    },

    title : {
        width : width*0.55,
        fontSize : 14,
        fontWeight : '400',
        color : color.black,
        paddingRight : 20,
        lineHeight : 25
    },

    author : {
        fontSize : 12,
        color : color.secondary
    },

    date : {
        fontSize : 12,
        color : color.secondary,
        position : 'absolute',
        right : 0
    }

})