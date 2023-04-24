import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';

//Color
import color from '../../../color';

//Components
import HeaderComponent from '../../../components/headerComponent/headerComponent';

import { useRoute } from '@react-navigation/native';

import HTML from 'react-native-render-html';

const { height, width } = Dimensions.get('screen');

export default BlogDetails = () => {

    const route = useRoute();
    const item = route.params.data;

    const date = new Date(item.published_at);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options).replace(/(\d+)(st|nd|rd|th)/, '$1');


    console.log(item.body_html)

    return (

        <View style={styles.screen}>

            <HeaderComponent showTitle={true} title={"Amrutam Blog"} showUserProfile={true} />

            <ScrollView>

                {
                    item.hasOwnProperty("image") &&

                    <Image 
                        source={{ uri : item.image.src }}
                        style={styles.img}
                    />
                }

                <Text style={styles.title}>{item.title}</Text>

                <View style={styles.rowContainer}>
                    <Text style={styles.author}>{item.author}</Text>
                    <Text style={styles.date}>{formattedDate}</Text>
                </View>

                <HTML source={{ html: item.body_html }} tagsStyles={tagsStyles} contentWidth={width * 0.92} />

            </ScrollView>

        </View>

    )

}

const tagsStyles = {
    p: {
        color: color.black,
        fontSize: 16,
    },
    
    h2: {
        color: color.black,
        fontWeight: 'bolder',
        fontSize : 20,
    },

    h3: {
        color: color.black,
        fontWeight : 'bolder',
        fontSize : 20
    },

    a: {
        color: color.black,
        textDecoration: 'none',
        textDecorationStyle: 'none'
    }
}

const styles = StyleSheet.create({

    screen : {
        height, 
        width,
        paddingHorizontal : '4%',
        paddingTop : 20
    },

    img : {
        height : height * 0.45,
        width : width*0.92,
        borderRadius : 8,
        alignSelf : 'center',
    },

    title : {
        fontFamily : 'Lato-Bold',
        fontSize : 20,
        fontWeight : 'bold',
        color : color.primary1,
        marginTop : 20,
    },

    rowContainer : {
        flexDirection : 'row',
        width : width/2,
        marginTop : 10
    },

    author : {
        fontSize : 12,
        color : color.secondary
    },

    date : {
        fontSize : 12,
        color : color.secondary,
        position : 'absolute',
        right : 0
    }

})