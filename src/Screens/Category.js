import { SafeAreaView,Text,FlatList } from 'react-native';

export default function Category({route,navigation}){
    const {BooksData} = route.params
    console.log("params data:",BooksData)
    return(
    <SafeAreaView>
     <Text>Category</Text>
  
    </SafeAreaView>
    )
}
