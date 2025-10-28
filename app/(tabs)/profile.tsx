import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const profile = () => {
  return (
    <View style ={styles.container}>
      <Text style={styles.Text}>profile</Text>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({

  container:{
    justifyContent:"center",
    alignContent:"center",
    flex:1
  },
  Text:{
    fontSize:20,
    color:"#007AFF",
    fontWeight:600
  }
})