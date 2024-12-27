import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'

const PostItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.post}>
                <Text style={styles.title}>{props.title}</Text>
                <Text>{props.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    post: {
        flex: 1,
        textAlign: 'left',
        padding: 20,
        alignItems: 'center',
        alignSelf: 'center',
        height: 250,
        width: '100%',
        marginLeft: 250,
        marginRight: 250,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid'
    },

    title: {
        fontSize: 23,
        fontWeight: 'bold',

    },
})

export default PostItem
