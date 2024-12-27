import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { createAPost } from '../apis/posts';

const Add = () => {


    const mutation = useMutation({
        mutationFn: (post) => createAPost(post)
    });

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        mutation.mutate({
            title: title,
            description: description
        })

        console.log(title, description)
    }


    return (
        <View>
            <Text style={styles.title}>Add A Post</Text>
            <TextInput
                style={styles.input}
                onChangeText={setTitle}
                value={title}
                placeholder="Enter Name"

            />

            <TextInput
                style={styles.input}
                onChangeText={setDescription}
                value={description}
                placeholder="Enter description"

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

export default Add
