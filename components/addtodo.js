import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, TextInput } from 'react-native';

export default function AddTodo({submitHandler}) {
    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val)
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholde='New Todo...'
                onChangeText={changeHandler}

            />
            <Button onPress={()=>submitHandler(text)} title='Add ToDo' color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    }
})
