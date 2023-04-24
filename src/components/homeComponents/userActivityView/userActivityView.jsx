import { View, Text, StyleSheet } from "react-native";

//Colors
import color from "../../../color";

//SvgUri
import { SvgUri } from 'react-native-svg';

import { icon } from "../../icon";

export default UserActivityView = (props) => {

    return (
        <View style={styles.view}>
            <SvgUri 
                        uri={icon(props.iconLeft)}
                        height={40}
                        width={40}
                        color={color.primary1}
            />

            <View style={styles.container}>
                <Text style={styles.mainText}>{props.activity} </Text>
                <Text style={styles.title}>{props.number} {props.measure}</Text>
            </View>

            <SvgUri 
                uri={icon(props.iconRight)}
                height={40}
                width={40}
                color={color.primary1}
    />
        </View>
    )

}

const styles = StyleSheet.create({
    view : { 
        height : 60,
        width : '98%',
        flexDirection : 'row',
        backgroundColor : color.background,
        elevation : 6,
        alignSelf : 'center',
        borderRadius : 8,
        justifyContent : 'space-around',
        alignItems : 'center',
        marginTop : 10,
    },

    container : {
        flexDirection : 'row'
    },

    mainText : {
        color : color.primary1,
        fontSize : 16,
    },

    title : {
        color : color.primary1,
        fontFamily : 'Lato-Bold',
        fontSize : 16,
        fontWeight : 'bold'
    }
})