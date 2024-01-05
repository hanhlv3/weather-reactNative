import React from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

import { weatherType } from '../utilities/weatherType'

const CurrentWeather = () => {
    const {
        wrapper,
        container,
        highLowWrapper,
        highLow,
        bodyWrapper,
        description,
        message,
        temp,
        feels
    } = styles
    return (
        <SafeAreaView style={wrapper}>
            <View style={container}>
                <Feather name="sun" size={100} color="black" />
                <Text style={temp}>6</Text>
                <Text style={feels}>Feels like 5</Text>
                <RowText
                    messageOne={'High: 8'}
                    messageTwo={'Low: 7'}
                    containerStyle={highLowWrapper}
                    messageOneStyle={highLow}
                    messageTwoStyle={highLow}
                />
            </View>
            <RowText
                messageOne={'Its sunny'}
                messageTwo={'Its perfect t-shirt weather'}
                containerStyle={bodyWrapper}
                messageOneStyle={description}
                messageTwoStyle={message}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'pink'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    temp: {
        color: 'black',
        fontSize: 48,
        fontWeight: 'bold'
    },
    feels: {
        color: 'black',
        fontSize: 36
    },
    highLowWrapper: {
        flexDirection: 'row'
    },
    highLow: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'medium'
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginBottom: 40
    },
    description: {
        fontSize: 48
    },
    message: {
        fontSize: 30
    }
})

export default CurrentWeather
