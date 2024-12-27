import React from 'react'
import { View, Text, FlatList, Button, TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import PostItem from './PostItem'
import { getAllPosts } from '../apis/posts'
import { useQuery } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import StackNav from '../navigation/StackNav'

const Home = () => {

    const navigation = useNavigation();

    const queryClient = useQueryClient();
    const { data, isFetching, isSuccess, refetch } = useQuery({
        queryKey: ['allPosts'],
        queryFn: getAllPosts,
        enabled: true,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["allPosts"] });
        },
    });

    const [searchQuery, setSearchQuery] = useState('');

    const postsList = data

    const filteredData = postsList?.filter(post =>
        post?.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const goToDetails = (id) => {
        navigation.navigate('Details', { id });
    };


    return (
        <View >

            <TextInput
                style={styles.searchBar}
                placeholder="Search..."
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            {/* {data?.map((post) => {
                <View style={styles.post}>
                    <Text style={styles.title}>{post.title}</Text>
                    <Text>{post.description}</Text>
                </View>
            })
            } */}

            <FlatList
                data={searchQuery === '' || searchQuery === ' ' ? postsList : filteredData}
                renderItem={({ post }) => <PostItem key={post?.id} title={post?.title} description={post?.description} onPress={() => goToDetails(post?.id)} />}
            />
            <Button title='click' onPress={() => console.log(data)} />

        </View>
    )
}


const styles = StyleSheet.create({
    post: {
        flex: 1,
        textAlign: 'left',
        padding: 20,
        alignItems: 'center',
        alignSelf: 'center',
        height: 150,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid'
    },

    title: {
        fontSize: 23,
        fontWeight: 'bold',

    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        marginTop: 20
    },

    searchBar: {
        height: 40,
        width: 380,
        textAlign: 'left',
        marginRight: 100,
        marginLeft: 100,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 10,
        marginTop: 50,
        backgroundColor: '#fff',
    },
})


export default Home
