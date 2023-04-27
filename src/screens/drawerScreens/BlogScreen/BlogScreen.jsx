import React, { useState, useEffect } from "react";

import { View, StyleSheet, FlatList, TouchableOpacity, Text } from "react-native";

//Colors
import color from "../../../color";

//Components
import HeaderComponent from "../../../components/headerComponent/headerComponent";
import Card from "../../../components/blogComponents/card/card";
import Category from "../../../components/blogComponents/category/category";
import Article from "../../../components/blogComponents/article/article";

import Lottie from 'lottie-react-native';

import { useNavigation } from "@react-navigation/native";

import axios from "axios";

export default HomeScreen = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [ blogData, setBlogData ] = useState([]);
    const [ blogCategories, setBlogCategories ] = useState([]);
    const [ displayData, setDisplayData ] = useState([]);
    const [ recentBlogs, setRecentBlogs ] = useState([]);

    const [ category, setCategory ] = useState("");

    const navigation = useNavigation();

    useEffect(() => {

        getBlogData();

    }, [])

    useEffect(() => {

        if(blogData.length != 0 && blogCategories.length == 0){
            getBlogCategories();
        }

    }, [blogData])

    useEffect(() => {

        if(blogCategories.length != 0){
            setCategory(blogCategories[0])
        }

    }, [blogCategories])

    const getBlogData = async () => {

        await axios.get("https://amrutam-server.cyclic.app/getBlogs").then((response) => {

            var temp = response.data;
            setBlogData(temp);

        });

    }

    const getBlogCategories = async () => {

        var temp = [];
        var tempBlogs = [];

        await blogData.map(blog => {
            temp.push(blog['blog_title'])
            tempBlogs.push(blog['articles'][1])
        })

        setBlogCategories(temp);
        setDisplayData(blogData[0]['articles'])
        setRecentBlogs(tempBlogs);
        setIsLoading(false);

    }

    const changeCategory = (selectedCategory) => {

        setCategory(selectedCategory);
        
        updateList(selectedCategory);
        
    }

    const updateList = (selectedCategory) => {
        blogData.map(blog => {
            if(blog['blog_title'] === selectedCategory){
                setDisplayData(blog['articles'])
            }
        })
    }

    if(isLoading){

        return (

            <View style={styles.screen}>

                <Lottie source={require('../../../../assets/animations/loading.json')} autoPlay loop />

            </View>

        )

    }

    return (

        <View style={styles.screen}>

            <View style={styles.headerContainer}>
                <HeaderComponent showTitle={true} title={"Amrutam Blog"} showUserProfile={true} />
            </View>

            <View style={styles.containers}>
                <FlatList 
                    data={recentBlogs}
                    key={(item) => item['id']}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (

                        <Card 
                            blog={item}
                            index={index}
                            numberOfBlogs={recentBlogs.length}
                        />

                    )}
                />
            </View>

            <View style={styles.containers}>
                <FlatList 
                    data={blogCategories}
                    key={(item, index) => index}
                    horizontal
                    showsHorizontalScrollIndicator={false}

                    renderItem={({ item }) => (

                        <Category 
                            category={item} 
                            selectedCategory={category} 
                            data={item.category} 
                            changeCategory={changeCategory}
                        />

                    )}
                />
            </View>

            <View>
            
                <FlatList 
                    data={displayData}
                    key={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (

                        <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={() => {

                            navigation.navigate("BlogDetails", { data : item })

                        }}>
                            <Article data={item} index={index} />
                        </TouchableOpacity>

                    )}
                    
                />

                <TouchableOpacity style={styles.btn} onPress={increaseBlogs}>
                    <Text style={styles.showText}>Show More</Text>
                </TouchableOpacity>

            </View>
                
            

        </View>

    )

}

const styles = StyleSheet.create({

    screen : {
        flex : 1,
        backgroundColor : color.background,
    },

    headerContainer : {
        paddingHorizontal : '4%'
    },

    containers : {
        paddingTop : 10
    },

    listContainer : {
    },

    card : {
        backgroundColor : color.background
    },

    btn : {
        height : 50,
        width : 150,
        elevation : 6,
        borderRadius : 40,
        backgroundColor : color.background,
        marginTop : 20,
        alignSelf : 'center',
        justifyContent : 'center'
    },

    showText : {
        color : color.black,
        fontWeight : 'bold',
        textAlign : 'center'
    }

})