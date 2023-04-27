import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

//Color
import color from '../../../color';

import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('screen');

export default Card = ( props ) => {

    const navigation = useNavigation();

    console.log(props.numberOfBlogs)

    return (

        <View style={[styles.spaceContainer, { marginLeft : props.index === 0 ? 5 : 10}, { marginRight : props.index === (props.numberOfBlogs-1) ? 10 : 0}]} >
            <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={() => {

                navigation.navigate("BlogDetails", { data : props.blog })

            }}>

                {
                    props.blog.hasOwnProperty("image") &&

                    <Image 
                        style={styles.img}
                        resizeMode="cover"
                        source={{ uri : props.blog.image.src }} 
                    />
                }

                <Text style={styles.title} numberOfLines={3}>{props.blog.title}</Text>
                

            </TouchableOpacity>
        </View>

    )

}

const styles = StyleSheet.create({

    spaceContainer : {
        height : height*0.29,
        width : width*0.45,
    },

    container : {
        height : height*0.28,
        width : width*0.45,
        borderRadius : 8,
        elevation : 6,
        backgroundColor : color.background,
        borderRadius : 8
    },

    img : {
        height : height*0.18,
        width : '100%',
        borderTopLeftRadius : 8,
        borderTopRightRadius : 8
    },

    title : {
        fontSize : 14,
        fontWeight : 'bold',
        color : color.black,
        backgroundColor : color.background,
        lineHeight : 25,
        paddingHorizontal : '8%'
    }

})