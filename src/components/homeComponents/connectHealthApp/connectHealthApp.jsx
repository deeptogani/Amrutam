import { View, Text, StyleSheet } from "react-native";

//Colors
import color from "../../../color";

//SvgUri
import { SvgUri } from 'react-native-svg';
import { icon } from "../../icon";

export default ConnectHealthApp = () => {

    return (
        <View style={styles.view}>
            <SvgUri 
                uri={icon('heart')}
                height={40}
                width={40}
                color={color.primary1}
            />

            <View>
                <Text style={styles.headText}>Health Data is not available</Text>

                <View style={styles.container}>
                    <Text style={styles.mainText}>Connect your </Text>
                    <Text style={styles.title}>Health App</Text>
                </View>
                
            </View>

            <SvgUri 
                uri={icon('add')}
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
        marginTop : 10
    },

    container : {
        flexDirection : 'row',
    },

    headText : {
        fontSize : 10,
        color : color.primary1,
        position : 'absolute',
        top : -14
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