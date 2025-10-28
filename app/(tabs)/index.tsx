import { StyleSheet, Text,Image, View, Alert, Button } from 'react-native';

import React from 'react';
const logoimg =require("../../assets/images/android-icon-background.png");
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Home Tab</Text>
      <Image source={logoimg}/>

    <View style={styles.container}>
      <Button
        title="Click me"
        color="#f70707ff"
        onPress={() => Alert.alert("Hello!", "You just clicked the button ")}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 60,
    backgroundColor: '#f9f9f9', // light background
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  image:{
    height:150,
    width:150,
    margin:40
  }
});
