import React from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
    const {
        wrapper,
        container,
        highLowWrapper,
        highLow,
        bodyWrapper,
        description,
        message,
        tempStyle,
        feels
    } = styles

    const {
        main: { temp, feels_like, temp_max, temp_min },
        weather
    } = weatherData

    const weatherCondition = weather[0].main

    return (
        <SafeAreaView
            style={[
                wrapper,
                {
                    backgroundColor:
                        weatherType[weatherCondition].backgroundColor
                }
            ]}
        >
            <View style={container}>
                <Feather
                    name={weatherType[weatherCondition].icon}
                    size={100}
                    color="white"
                />
                <Text style={tempStyle}>{`${temp} ℃`}</Text>
                <Text style={feels}>{`Feels like ${feels_like}`}</Text>
                <RowText
                    messageOne={`High: ${temp_max}`}
                    messageTwo={`Low: ${temp_min}`}
                    containerStyle={highLowWrapper}
                    messageOneStyle={highLow}
                    messageTwoStyle={highLow}
                />
            </View>
            <RowText
                messageOne={weather[0].description}
                messageTwo={weatherType[weatherCondition].message}
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
    tempStyle: {
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
