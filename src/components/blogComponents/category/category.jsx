import { Text, StyleSheet, TouchableOpacity } from 'react-native';

//Colors
import color from '../../../color';

export default Category = (props) => {

    const isSelected = props.selectedCategory == props.category 

    return (

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

    )

}

const styles = StyleSheet.create({

    container : {
        height : 50,
        width : 100,
        borderRadius : 8,
        elevation : 2,
        backgroundColor : color.primary2,
        margin : 5,
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom : 10
    },

    title : {
        fontSize : 12,
        textAlign : 'center',
    }

})