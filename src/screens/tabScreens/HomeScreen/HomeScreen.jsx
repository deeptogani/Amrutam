import React, { useState } from "react";

import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

//Colors
import color from "../../../color";

//Time
import moment from 'moment';

//Components
import HeaderComponent from "../../../components/headerComponent/headerComponent";
import AskingUserFeeling from "../../../components/homeComponents/askingUserFeeling/askingUserFeeling";
import UserActivityView from "../../../components/homeComponents/userActivityView/userActivityView";
import ConnectHealthApp from "../../../components/homeComponents/connectHealthApp/connectHealthApp";
import CategoriesOfProducts from "../../../components/homeComponents/categoriesOfProducts/categoriesOfProducts";
import Appointments from "../../../components/homeComponents/appointments/appointments";
import RecentOrders from "../../../components/homeComponents/recentOrders/recentOrders";
import Blogs from "../../../components/homeComponents/blogs/blogs";
import TopDoctors from "../../../components/homeComponents/topDoctors/topDoctors";
import UserActivities from "../../../components/homeComponents/userActivities/userActivities";

//User Mock Data
import User from "../../../dummydata/user";

const { height, width } = Dimensions.get("screen");

export default HomeScreen = () => {

    const [ askedUserFeeling, setAskedUserFeeling ] = useState(false);
    const [ isUserFeelingCancelled, setIsUserFeelingCancelled] = useState(false);
    
    const getDayString = () => {

        const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        
        let day = new Date().getDay();
        let time = moment().format('D MMM')
        let formattedTime = `${weekDays[day]}, ${time}`

        return formattedTime;

    }

    const closeUserFeeling = () => {
        setAskedUserFeeling(true);
        setIsUserFeelingCancelled(true);
    }

    return (

        <View style={styles.screen}>

            <ScrollView showsVerticalScrollIndicator={false} >

                <View style={{ paddingHorizontal : '4%' }}>

                    <HeaderComponent showTitle={false} showUserProfile={true}/>

                    <View style={styles.greetingsContainer}>

                        <Text style={styles.dateTime}>{getDayString()}</Text>
                        <Text style={styles.greetings}>Namaste, {User.name}</Text>

                    </View>

                    {!askedUserFeeling && !isUserFeelingCancelled && 
                        <AskingUserFeeling closeUserFeeling = {closeUserFeeling} />
                    }

                    <UserActivityView 
                        activity = 'You slept for'
                        number = {8}
                        measure = 'hours'
                        iconLeft = 'sleep'
                        iconRight = 'repeat'
                    />

                    <UserActivityView 
                        activity = 'You walked'
                        number = {1200}
                        measure = 'steps'
                        iconLeft = 'steps'
                        iconRight = 'repeat'
                    />

                    <UserActivityView 
                        activity = 'Screen Time is'
                        number = {5}
                        measure = 'hours'
                        iconLeft = 'screenTime'
                        iconRight = 'repeat'
                    />

                    <ConnectHealthApp />

                </View>

                <CategoriesOfProducts />

                <Appointments />

                <RecentOrders />

                <Blogs />

                <UserActivities />

                <TopDoctors />

            </ScrollView>

        </View>

        

    )

}

const styles = StyleSheet.create({

    screen : {
        flex : 1,
        backgroundColor : color.background,
    },

    headContainer : {
        flexDirection : "row",
        height : 40,
        width,
        marginTop : 20,
        alignItems : "center",
    },

    secondaryHeadContainer : {
        flexDirection : 'row',
        width : width * 0.4,
        marginLeft : 'auto',
        justifyContent : 'space-evenly'
    },

    profileImage : {
        height : 30,
        width : 30,
        borderRadius : 8,
    },  

    cartItemsContainer : {
        height : 15,
        width : 15,
        borderRadius : 10,
        backgroundColor : color.primary1,
        position : 'absolute',
        right : 0,
        top : -8
    },

    cartItems : {
        color : color.background,
        fontSize : 8,
        textAlign : 'center',
        alignItems : 'center',
    },

    greetingsContainer : {
        height : height * 0.08,
        width,
        marginTop : 20,
        fontFamily : 'Lato-Bold',
    },

    dateTime : {
        color : color.primary1,
        fontSize : 12
    },

    greetings : {
        fontWeight : 'bold',
        color : color.primary1,
        fontFamily : 'Lato-Bold',
        fontSize : 20
    },

})