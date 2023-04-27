import React, { useState, useEffect } from "react";

import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";

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

                <View style={styles.containers}>
                    <FlatList 
                        style={styles.listContainer}
                        data={recentBlogs}
                        key={(item, index) => item['id']}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (

                            <Card 
                                blog={item}
                                index={index}
                            />

                        )}
                    />
                </View>

                <FlatList 
                    style={styles.listContainer}
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

                <FlatList 
                    style={styles.listContainer}
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
        marginTop : 10
    },

    card : {
        backgroundColor : color.background
    }

})