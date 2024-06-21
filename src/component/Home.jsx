import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const Home = ({ route, navigation }) => {

    const { name, password } = route.params;
  return (
    <SafeAreaView style={{alignItems:"center"}}>
        <Text>home</Text>
      <Text>{name}</Text>
    </SafeAreaView>
  )
}

export default Home