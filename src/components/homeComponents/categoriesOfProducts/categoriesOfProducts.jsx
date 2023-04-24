import { View, Text, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

//Colors
import color from '../../../color';

//SvgUri
import { SvgUri } from 'react-native-svg';
import { icon } from '../../icon';

//Dummy Data
import { categoriesData } from "../../../dummydata/categoriesData";

const { width } = Dimensions.get('screen');
 
export default CategoriesOfProducts = () => {

    const Card = ({ item, index }) => {
        
        return (
            <TouchableOpacity style={[styles.cardContainer, index == 0 ? {marginLeft : width * 0.04 } : null]}>

                <View style={styles.card}>
                    <SvgUri uri={icon(item.icon)} height={40} width={40} color={color.primary1}/>
                </View>

                <Text style={styles.cardTitle}>{item.category}</Text>

            </TouchableOpacity>
        )

    }

    return (

        <View style={styles.headContainer}>

            <View style={styles.container}>

                <Text style={styles.title}>Shop for Health & Beauty</Text>

                <SvgUri uri={icon("rightArrow")} height={35} width={35} color={color.primary1} style={styles.arrow}/>

            </View>

            <FlatList 
                style={styles.listContainer}
                renderItem={Card}
                data={categoriesData}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

        </View>

    )

}

const styles = StyleSheet.create({

    headContainer : {
        marginTop : 30,
    },

    listContainer : {
        marginTop : 20
    },

    title : {
        fontFamily : 'Lato-Bold',
        fontSize : 16,
        color : color.primary1,
        marginLeft : width * 0.04
    },
    
    arrow : {
        marginLeft : 'auto',
        marginRight : width * 0.04
    },

    cardContainer : {
        height : 80,
        width : 60,
        marginRight : 16
    },

    card : {
        height : 60,
        width : '100%',
        borderRadius : 5,
        backgroundColor : color.primary2,
        justifyContent : 'center',
        alignItems : 'center'
    },

    cardTitle : {
        fontSize : 10,
        textAlign : 'center',
        color : color.black
    },

    container : {
        flexDirection : 'row',
        alignItems : 'center'
    }

})