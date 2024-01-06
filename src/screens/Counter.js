import { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Counter = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        
    }, [count])


    return (
        <View>
            <Text>{`Count: ${count}`}</Text>
            <Button 
                onPress={() => setCount(count + 1)}
                title={'Increase the count'}
            />
            <Button 
                onPress={() => setCount(count -1)}
                title={'decrease the count'}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Counter