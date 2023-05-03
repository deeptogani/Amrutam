import { View, Text, FlatList, StyleSheet, Dimensions, Image } from 'react-native';

//Color
import color from '../../../color';

//Dummy Data
import { recentOrdersData } from '../../../dummydata/recentOrders';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('screen');

export default RecentOrders = () => {

    const Card = ({ item, index }) => {

        return (

            <View style={[styles.card, 
                        { marginLeft : index === 0 ? width*0.04 : 20 },
                        { marginRight : index === recentOrdersData.length-1 ? width*0.04 : 0 }
                        ]}>
            
                <Image 
                    source={item.image}
                    resizeMode='contain'
                    style={styles.productImage}
                />

                <View style={styles.textContainer}>

                    <Text style={styles.product_name}>{item.product_name}</Text>

                    <View style={styles.priceContainer}>
                        <Text style={styles.discounted_price}>₹{item.discounted_price}</Text>
                        <Text style={styles.total_price}>₹{item.total_price}</Text>
                    </View>
                    
                    <TouchableOpacity style={styles.reorderContainer}>
                        <Icon name='arrow-u-left-top' size={25} color={color.primary1}/>
                        <Text style={styles.reorderText}>Reorder</Text>
                    </TouchableOpacity>

                </View>

            </View>

        )
        
    }

    return (

        <View style={styles.headContainer}>
            <Text style={styles.title}>Recent Orders</Text>

            <FlatList 
                style={styles.listContainer}
                renderItem={Card}
                data={recentOrdersData}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

        </View>

    )

}

const styles = StyleSheet.create({

    headContainer : {
        marginTop : 30,
        height : 200
    },

    title : {
        fontFamily : 'Lato-Bold',
        fontSize : 16,
        color : color.primary1,
        marginLeft : width * 0.04
    },

    listContainer : {
        marginTop : 20,
    },

    card : {
        height : 150,
        width : width*0.75,
        elevation : 6,
        borderRadius : 8,
        flexDirection : 'row',
        backgroundColor : color.background
    },

    productImage : {
        height : '100%',
        width : '45%',
        borderTopLeftRadius : 8,
        borderBottomLeftRadius : 8
    },

    textContainer : {
        flex : 1,
        paddingLeft : '5%',
        paddingRight : '2%'
    },

    priceContainer : {
        flexDirection : 'row',
        marginTop : 5,
    },

    product_name : {
        color : color.black,
        marginTop : 20,
        fontSize : 14,
        lineHeight : 20
    },

    discounted_price : {
        fontFamily : 'Lato-Bold',
        fontWeight : 'bold',
        color : color.primary1,
        fontSize : 18
    },

    total_price : {
        fontFamily : 'Lato-Bold',
        color : color.black,
        fontSize : 14,
        marginLeft : 12,
        textDecorationLine: 'line-through',
        textDecorationColor : color.black,
        textDecorationStyle : 'solid'
    },

    reorderContainer : {
        flexDirection : 'row',
        alignItems : 'center'
    },

    reorderText : {
        fontFamily : 'Lato-Bold',
        fontSize : 14,
        fontWeight : 'bold',
        color : color.primary1,
        marginLeft : 5
    } 

})