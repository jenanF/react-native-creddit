import React from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { StyleSheet } from 'react-native'


const CommentItem = (props) => {
    return (
        <View style={styles.box}>
            <Text style={styles.title}>{props.name}</Text>
            <Text>{props.comment}</Text>
            <Button onPress={props.onPress} color='red' title='Delete' />


        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        textAlign: 'left',
        padding: 20,
        alignItems: 'center',
        alignSelf: 'center',
        height: 150,
        width: 200,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid'
    },

    title: {
        fontSize: 23,
        fontWeight: 'bold',

    },
})

export default CommentItem
