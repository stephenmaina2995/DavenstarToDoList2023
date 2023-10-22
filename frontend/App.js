import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {StyleSheet, TextInput, View,Button } from 'react-native';

export default function App() {
  let [userId, setUserId]=useState("")

  let getUsers = () => {
    fetch("http://10.0.2.2:3000/users")
    .then(res =>{
    console.log(res.status);
    console.log(res.headers);
    return res.json();
    })
    
    .then((result)=>{
      console.log(result);
    },
    (error)=>{
      console.log(error); 
    })
  };

  let getUser = (id) => {
    fetch(`http://10.0.2.2:3000/users/${id}`)
    .then(res =>{
    console.log(res.status);
    console.log(res.headers);
    return res.json();
    })
    
    .then((result)=>{
      console.log(result);
    },
    (error)=>{
      console.log(error); 
    })
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder='User Id' style={styles.input} value={userId} onChangeText={(value) => setUserId(value)}/>
      <Button title ="Get" onPress={getUsers} />
      <Button title ="Get by Id" onPress={() =>getUser(userId)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    alignSelf:"stretch",
    margin: 8,
    padding: 4
  }
});
