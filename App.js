import React from 'react'
import {StyleSheet, View, Text, SafeAreaView } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'center',
  }
})

export default App
