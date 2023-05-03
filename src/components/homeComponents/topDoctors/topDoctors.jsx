import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native';

import { topDoctorsData } from '../../../dummydata/topDoctors';

const { height, width } = Dimensions.get('screen');

export default TopDoctor = () => {

    const Card = ({ item, index }) => {

        return (

            <View style={[styles.card, 
                        { marginLeft : index === 0 ? width*0.04 : 20, 
                          marginRight : index === (topDoctorsData.length - 1) ? width*0.04 : null }
                        ]}>

                <Image 
                    source={item.image}
                    resizeMode='cover'
                    style={styles.image}
                />

                <Text style={styles.mainText} >{item.name}</Text>

                <TouchableOpacity style={styles.btnContainer}>
                    <Text style={styles.btnText}>Follow</Text>
                </TouchableOpacity>

            </View>

        )

    }

    return (

        <View style={styles.headContainer}>

            <Text style={styles.title}>Top Rated Doctors</Text>

            <FlatList 
                style={styles.listContainer}
                renderItem={Card}
                data={topDoctorsData}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

        </View>

    )

}

const styles = StyleSheet.create({

    headContainer : {
        height : 275,
        marginTop : 30,
        marginBottom : height*0.18
    },

    title : {
        fontFamily : 'Lato-Bold',
        fontSize : 16,
        color : color.primary1,
        marginLeft : width*0.04
    },

    listContainer : {
        marginTop : 20,
    },
    
    card : {
        height : 210,
        width : width*0.38,
        elevation : 6,
        borderRadius : 8,
        backgroundColor : color.background,
        alignItems : 'center'
    },

    image : {
        height : 125,
        width : '100%',
        borderRadius : 8
    },

    mainText : {
        color : color.primary1,
        fontSize : 16,
        fontWeight : '400',
        marginTop : 14
    },

    btnContainer : {
        backgroundColor : color.primary1,
        height : 30,
        width : 100,
        borderRadius : 8,
        justifyContent : 'center',
        marginTop : 8
    },

    btnText : {
        color : color.background,
        textAlign : 'center',
        fontSize : 12
    }

})