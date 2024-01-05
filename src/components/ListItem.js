import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props
    const { item, temp, date } = styles
    return (
        <View style={item}>
            <Feather name="sun" size={50} color="white" />
            <Text style={date}>{dt_txt}</Text>
            <Text style={temp}>{min}</Text>
            <Text style={temp}>{max}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'pink',
        marginHorizontal: 16,
        marginVertical: 8,
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBlockColor: 'black',
        borderWidth: 5
    },
    temp: {
        fontSize: 20,
        color: 'white'
    },
    date: {
        color: 'white',
        fontSize: 15
    }
})

export default ListItem
