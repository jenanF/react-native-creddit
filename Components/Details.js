import { View, Text, FlatList, Image, Button } from "react-native"
import { StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { getPostById } from "../apis/posts";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { deletePost } from "../apis/posts";
import { useNavigation } from "@react-navigation/native";
import { deleteComment } from "../apis/posts";
import CommentItem from "./CommentItem";


const Details = ({ route }) => {

    const navigation = useNavigation();

    //const id = route?.params?.id

    const id = 'dbd98601-e41a-4676-82ae-00cf0bf677a9'

    const queryClient = useQueryClient();
    const { data, isFetching, isSuccess, refetch } = useQuery({
        queryKey: ['Posts', id],
        queryFn: () => getPostById(id),
        enabled: true,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["Posts", id] });
        },
    });

    const post = data?.find((p) => { return p.id == id })

    const postMmutation = useMutation({
        mutationFn: (id) => deletePost(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["Posts", id] });
        },
    });

    const commentMutation = useMutation({
        mutationFn: (id) => deleteComment(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["Posts", id] });
        },
    });



    const handleDelete = (id) => {

        postMmutation.mutate(id)

    }


    const handleDeleteComment = (comment) => {
        commentMutation.mutate(comment)
    }


    const goToAddComments = (id) => {
        navigation.navigate('Comment', { id });
    }



    return (
        <View>
            <Text>Tilte:</Text>
            <Text>{post?.title}</Text>

            <Text>Description:</Text>
            <Text>{post?.description}</Text>
            <View>
                <FlatList data={post?.comments} renderItem={({ comment }) => <CommentItem onPress={() => handleDeleteComment(comment.id)} name={comment?.username} comment={comment?.comment} />} />
            </View>

            <Button color="blue" title="Add a Comment" onPress={() => goToAddComments(post?.id)} />

            <Button color="red" title="Delete Post" onPress={() => handleDelete(post?.id)} />
        </View>
    )
}

export default Details
