import { View, StyleSheet, FlatList } from 'react-native';

import notificationCard from '../notificationCard/notificationCard';

export default notificationsList = (props) => {

    return (

        <View style={styles.listContainer}>

            <FlatList 
                data={props.data}
                renderItem={notificationCard}
                key={item => item.id}
                showsVerticalScrollIndicator={false}
                style={styles.list}
            />

        </View>

    )

}

const styles = StyleSheet.create({

    listContainer : {
        height : '100%',
        marginTop : 10
    },

    list : {
        marginBottom : 250
    }

})