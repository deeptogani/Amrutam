import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';

import { userActivitiesData } from '../../../dummydata/userActivities';

//SvgUri
import { SvgUri } from 'react-native-svg';
import { icon } from '../../icon';

//Colors
import color from '../../../color';

const { width } = Dimensions.get('screen');

const CARDWIDTH = width * 0.27;

export default UserActivities = () => {

    const Card = ({ item, index }) => {

        return (

            <View style={[styles.card, { marginLeft : index === 0 ? 0 : 20 }]}>

                <View style={styles.imageContainer}>
                    
                    <SvgUri uri={icon(item.icon)} color={color.primary1} height={CARDWIDTH / 2} width={CARDWIDTH / 2} />

                </View>

                <Text style={styles.mainText} >{item.text}</Text>

            </View>

        )

    }

    return (

        <View style={styles.headContainer}>

            <Text style={styles.title}>What are you looking for ?</Text>

            <FlatList 
                style={styles.listContainer}
                renderItem={Card}
                data={userActivitiesData}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

        </View>

    )

}

const styles = StyleSheet.create({

    headContainer : {
        height : CARDWIDTH + 100,
        marginTop : 30,
        paddingHorizontal : width*0.04
    },

    title : {
        fontFamily : 'Lato-Bold',
        fontSize : 16,
        color : color.primary1,
    },

    listContainer : {
        marginTop : 20,
    },
    
    card : {
        height : CARDWIDTH + 50,
        width : CARDWIDTH,
        elevation : 6,
        borderRadius : 8,
        backgroundColor : color.background,
        alignItems : 'center'
    },

    imageContainer : {
        height : CARDWIDTH,
        width : '100%',
        borderRadius : 8,
        backgroundColor : color.primary2,
        justifyContent : 'center',
        alignItems : 'center'
    },

    mainText : {
        color : color.primary1,
        fontSize : 16,
        fontWeight : '400',
        marginTop : 12
    },

    btnContainer : {
        backgroundColor : color.primary1,
        height : 30,
        width : 100,
        borderRadius : 8,
        justifyContent : 'center',
        marginTop : 16
    },

    btnText : {
        color : color.background,
        textAlign : 'center',
        fontSize : 12
    }

})