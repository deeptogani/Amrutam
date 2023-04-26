import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//Colors
import color from '../../../color';

export default Category = (props) => {

    const isSelected = props.selectedCategory == props.category 

    return (

        <View style={styles.spaceContainer}>

            <TouchableOpacity style={[
                styles.container, 
                { backgroundColor : isSelected ? color.primary1 : color.primary2 }
                ]}
                onPress={() => {
                    props.changeCategory(props.category)
                }}
            >
                
                <Text style={[styles.title, { color : isSelected ? color.background : color.black }]}>{props.category}</Text>
            
            </TouchableOpacity>

        </View>

    )

}

const styles = StyleSheet.create({

    spaceContainer : {
        height : 70,
        width : 100,
        margin : 5
    },

    container : {
        height : 50,
        width : '100%',
        borderRadius : 8,
        elevation : 6,
        backgroundColor : color.primary2,
        justifyContent : 'center',
        alignItems : 'center'
    },

    title : {
        fontSize : 12,
        textAlign : 'center',
    }

})