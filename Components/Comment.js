import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { addAComment } from '../apis/posts';

const Comment = ({ route }) => {

    const id = route?.params?.id

    const mutation = useMutation({
        mutationFn: (c) => addAComment(id, c)
    });

    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = () => {
        mutation.mutate({
            username: username,
            comment: comment
        })

        console.log(username, comment)
    }

    return (
        <View>
            <Text style={styles.title}>Add A Post</Text>
            <TextInput
                style={styles.input}
                onChangeText={setUsername}
                value={username}
                placeholder="Enter Name"

            />

            <TextInput
                style={styles.input}
                onChangeText={setComment}
                value={comment}
                placeholder="Enter comment"

            />

            <Button title="Submit" style={styles.submit} onPress={handleSubmit}>Submit</Button>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 380,
        textAlign: 'left',
        alignSelf: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 10,
        marginTop: 50,
        backgroundColor: '#fff',
    },

    submit: {
        backgroundColor: 'grey',
        color: 'white'
    }
})


export default Comment
