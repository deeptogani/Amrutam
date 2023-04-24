import { View, Text, StyleSheet, Dimensions } from 'react-native';

//Colors
import color from '../../../color';

//SvgUri
import { SvgUri } from 'react-native-svg';
import { icon } from '../../icon';

const { height } = Dimensions.get('screen');

export default noNotifications = () => {

    return (

        <View style={styles.screen} >

            <Text style={styles.title}>No new notifications!</Text>
            
            <SvgUri uri={icon("logo")} height={150} width={150} style={styles.icon} />

            <Text style={styles.subTitle}>Check this section for updates and special offers</Text>

        </View>

    )

}

const styles = StyleSheet.create({

    screen : {
        flex : 1,
        alignItems : 'center'
    },

    title : {
        fontFamily : 'Lato-Bold',
        fontWeight : 'bold',
        fontSize : 20,
        color : color.primary1,
        textAlign : 'center',
        marginTop : height * 0.2
    },

    icon : {
        marginTop : 50
    },

    subTitle : {
        textAlign : 'center',
        color : color.black,
        marginTop : 50
    }

})