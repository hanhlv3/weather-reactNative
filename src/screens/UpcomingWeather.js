import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    FlatList,
    StatusBar,
    ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

const DATA = [
    {
        dt: 1661875201,
        main: {
            feels_like: 296.02,
            temp_min: 234,
            temp_max: 298.24
        },
        weather: [
            {
                main: 'Sunny'
            }
        ],
        dt_txt: '2023-08-30 16:00:00'
    },
    {
        dt: 1661875202,
        main: {
            feels_like: 296.02,
            temp_min: 234,
            temp_max: 298.24
        },
        weather: [
            {
                main: 'Sunny'
            }
        ],
        dt_txt: '2023-08-30 16:00:00'
    },
    {
        dt: 1661875203,
        main: {
            feels_like: 296.02,
            temp_min: 234,
            temp_max: 298.24
        },
        weather: [
            {
                main: 'Sunny'
            }
        ],
        dt_txt: '2023-08-30 16:00:00'
    }
]

const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <ListItem
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    )
    const { container, image } = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/upcoming-background.png')}
                style={image}
            >
                <Text>Upcoming Weather</Text>

                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    image: {
        flex: 1
    }
})

export default UpcomingWeather
