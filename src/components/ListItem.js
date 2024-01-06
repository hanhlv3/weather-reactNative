import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'
import moment from 'moment/moment'

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props
    const { item, temp, date, dateTextWrapper } = styles
    return (
        <View style={item}>
            <Feather
                name={weatherType[condition].icon}
                size={50}
                color="white"
            />
            <View style={dateTextWrapper}>
                <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
                <Text style={date}>{moment(dt_txt).format('hh:mm:ss a')}</Text>
            </View>
            <Text style={temp}>{`${Math.round(min)} ℃ `}</Text>
            <Text style={temp}>{`${Math.round(max)} ℃` }</Text>
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
    },
    dateTextWrapper: {
        flexDirection: 'column'
    }
})

export default ListItem
