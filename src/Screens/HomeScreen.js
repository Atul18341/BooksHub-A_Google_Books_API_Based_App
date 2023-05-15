import {useState, useEffect} from "react";
import { SafeAreaView,Text,View,TouchableHighlight,StyleSheet } from 'react-native';
import axios from 'axios';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Category from "./Category";
export default function HomeScreen({navigation}){
   let [BooksData,setBooksData]=useState([]);
   
   
    const baseUrl = `https://www.googleapis.com/books/v1/volumes`

    const Request=(category)=>{
        axios.get(`${baseUrl}?q=${category}`).then((response)=>{
            setBooksData(response.data.items)
            navigation.navigate("Category",{BooksData})
        })
        
    }
    return(
    <SafeAreaView>
       
     <Text style={styles.heading}>Books Categories</Text>
     <View style={styles.categoryRow}>
     <TouchableHighlight style={styles.CategoryCard} onPress={()=>Request("Romance+novel")}>
        <Text style={styles.CategoryName}>Romance novel</Text>
     </TouchableHighlight>
     <TouchableHighlight style={styles.CategoryCard} onPress={()=>Request("Historical+Fiction")}>
        <Text style={styles.CategoryName}>Historical Fiction</Text>
     </TouchableHighlight>
     </View>
     <View style={styles.categoryRow}>
     <TouchableHighlight style={styles.CategoryCard} onPress={()=>Request("Memoir")}>
        <Text style={styles.CategoryName}>Memoir</Text>
     </TouchableHighlight>
     <TouchableHighlight style={styles.CategoryCard} onPress={()=>Request("Business")}>
        <Text style={styles.CategoryName}>Business</Text>
     </TouchableHighlight>
     </View>
     <View style={styles.categoryRow}>
     <TouchableHighlight style={styles.CategoryCard} onPress={()=>Request("Non-Fiction")}>
        <Text style={styles.CategoryName}>Non-fiction</Text>
     </TouchableHighlight>
     <TouchableHighlight style={styles.CategoryCard} onPress={()=>Request("Fiction")}>
        <Text style={styles.CategoryName}>Fiction</Text>
     </TouchableHighlight>
     </View>
    </SafeAreaView>
    
    )
   
}
const styles = StyleSheet.create({
    heading:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:25
    },
    categoryRow:{
         flexDirection:'row',
    },
    CategoryCard:{
        backgroundColor:'aqua',
        width:170,
        height:150,
        margin:10,
        justifyContent:'center',
        alignItems:'center'
    },
    CategoryName:{
        fontWeight:'bold',
        fontSize:20,
    }
})
