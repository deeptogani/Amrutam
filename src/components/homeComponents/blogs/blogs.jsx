import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';

import { blogsData } from '../../../dummydata/blogs';

//Colors
import color from '../../../color';

const { width } = Dimensions.get('screen');

export default Blogs = () => {

    const Card = ({ item, index }) => {

        return (

            <View style={[styles.card, { marginLeft : index === 0 ? width*0.04 : 20 }]}>

                <View style={styles.textContainer}>

                    <Text style={styles.mainText} numberOfLines={3}>{item.text}...</Text>

                    <TouchableOpacity style={styles.btnContainer}>
                        <Text style={styles.btnText}>Read More</Text>
                    </TouchableOpacity>

                    <Text style={styles.date}>{item.date}</Text>

                </View>
            
                <Image 
                    source={item.image}
                    resizeMode='contain'
                    style={styles.doctorImage}
                />

            </View>


        )

    }

    
    return (

        <View style={styles.headContainer}>

            <Text style={styles.title}>Amrutam Blog</Text>

            <FlatList 
                style={styles.listContainer}
                renderItem={Card}
                data={blogsData}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

        </View>

    )
        

}

const styles = StyleSheet.create({

    headContainer : {
        marginTop : 30,
        height : 200,
    },

    listContainer : {
        marginTop : 20,
    },

    title : {
        fontFamily : 'Lato-Bold',
        fontSize : 16,
        color : color.primary1,
        marginLeft : width*0.04
    },

    card : {
        height : 150,
        width : width*0.7,
        elevation : 6,
        borderRadius : 8,
        flexDirection : 'row',
        backgroundColor : color.background,
        alignItems : 'center'
    },

    textContainer : {
        width : width * 0.4,
        paddingLeft : 20,
        paddingRight : 50
    },
    
    doctorImage : {
        width : width * 0.3,
        height : 150,
        borderTopRightRadius : 8,
        borderBottomRightRadius : 8
    },


    mainText : {
        fontSize : 14,
        color : color.black,
        lineHeight : 22
    },

    btnContainer : {
        backgroundColor : color.primary1,
        height : 30,
        width : 100,
        borderRadius : 8,
        justifyContent : 'center',
        marginTop : 10
    },

    btnText : {
        color : color.background,
        textAlign : 'center',
        fontSize : 12
    },

    date : {
        fontSize : 12,
        color : color.black,
        lineHeight : 22,
        marginTop : 5
    }

});