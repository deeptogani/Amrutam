import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

//Colors
import color from '../../../color';

//SvgUri
import { SvgUri } from 'react-native-svg';
import { icon } from '../../icon';

const { width } = Dimensions.get('screen');

export default Appointments = () => {

    return (
        <View style={styles.view}>
            
            <View style={styles.rowContainer}>
                <Text style={styles.title}>Upcoming Appointments</Text>
                
                <TouchableOpacity style={styles.clearContainer}>
                    <Text style={styles.clearText}>Clear</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.viewContainer}>

                <SvgUri uri={icon("calendar")} height={35} width={35} color={color.primary1} />
                <Text style={styles.mainText}>No New Appointments</Text>
                
                <TouchableOpacity style={styles.bookContainer}>
                    <Text style={styles.bookText} >Book Now</Text>
                </TouchableOpacity>
                
            </View>
            
        </View>
    )

}

const styles = StyleSheet.create({

    view : {
        marginTop : 30,
        marginHorizontal : width * 0.04
    },

    rowContainer : {
        flexDirection : 'row'
    },

    title : {
        fontFamily : 'Lato-Bold',
        fontSize : 16,
        color : color.primary1,
        marginLeft : 5
    },

    clearContainer : {
        marginLeft : 'auto',
        marginRight : 10
    },

    clearText : {
        fontSize : 16,
        color : color.primary1,
    },

    viewContainer : {
        height : 50,
        width : '100%',
        borderWidth : 1.5,
        borderColor : color.primary1,
        alignSelf : 'center',
        borderRadius : 12,
        marginTop : 15,
        flexDirection : 'row',
        paddingLeft : 14,
        alignItems : 'center'
    },

    mainText : {
        color : color.primary1,
        marginLeft : 16
    },

    bookContainer : {
        marginLeft : 'auto',
        marginRight : 14
    },

    bookText : {
        color : color.primary1,
        fontFamily : 'Lato-Bold',
        fontWeight : 'bold',
        
    }

})