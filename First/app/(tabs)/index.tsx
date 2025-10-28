import { StyleSheet, Text,Image, View, Alert, Button, Linking } from 'react-native';

import React from 'react';
const logoimg =require("../../assets/images/android-icon-background.png");
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Home </Text>
      <View style={styles.container}><Text style={styles.text}> Are you currently a  member? </Text></View>
    
    <View style={styles.container}>
      <Button
        title="Click me"
        color="#f70707ff"
        onPress={() => Alert.alert("Hello!", "You just clicked the button ")}
      />
    </View>
     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Open Google"
        onPress={() => Linking.openURL("https://www.google.com")}
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
    backgroundColor: '#292c37ff', // light background
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    color: '#ffffffff',
    gap:20

  },
  image:{
    height:100,
    width:100,
    margin:10
  }
});
