import React, { useState, useEffect } from "react";

import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";

//Colors
import color from "../../../color";

//Components
import HeaderComponent from "../../../components/headerComponent/headerComponent";
import Category from "../../../components/blogComponents/category/category";
import Article from "../../../components/blogComponents/article/article";

import { useNavigation } from "@react-navigation/native";

import axios from "axios";

export default HomeScreen = () => {

    const [ blogData, setBlogData ] = useState([]);
    const [ blogCategories, setBlogCategories ] = useState([]);
    const [ displayData, setDisplayData ] = useState([]);

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

        await blogData.map(blog => {
            temp.push(blog['blog_title'])
        })

        setBlogCategories(temp);
        setDisplayData(blogData[0]['articles'])

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

    return (

        <View style={styles.screen}>

            <View style={styles.headerContainer}>
                <HeaderComponent showTitle={true} title={"Amrutam Blog"} showUserProfile={true} />

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
                    renderItem={({ item }) => (

                        <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={() => {

                            navigation.navigate("BlogDetails", { data : item })

                        }}>
                            <Article data={item} />
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

    listContainer : {
        marginTop : 20
    },

    card : {
        backgroundColor : color.background
    }

})