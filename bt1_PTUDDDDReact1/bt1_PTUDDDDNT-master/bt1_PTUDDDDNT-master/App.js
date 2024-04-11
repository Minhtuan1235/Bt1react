import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { ImageBackground, TextInput } from 'react-native-web';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleClick = () => {
    alert(`Tên đăng nhập: ${username}\nMật khẩu: ${password}`);
  };
  return (
    <ImageBackground source={{uri: 'https://st.depositphotos.com/1015682/2086/i/450/depositphotos_20867981-stock-photo-earth-at-night-with-city.jpg'}} style={styles.background}>
      <View>
        <View>
          <Image
            style={{width: 200,height: 200, resizeMode: 'contain',alignSelf: "center"}} source={{uri: 'https://images.unsplash.com/photo-1658279165324-454de0ee3da6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw0WWlEYXVJR1Vnc3x8ZW58MHx8fHx8&w=1000&q=80',}}/>          
          <TextInput
            style={styles.textinput}
            value={username}  
            onChangeText={setUsername}   
            placeholder="Tên đăng nhập"
            placeholderTextColor="gray"
            color="red"
          />
          <TextInput
            style={styles.textinput}
            value={password}   
            onChangeText={setPassword} 
            placeholder="Mật khẩu"
            placeholderTextColor="red"
            color="red"
          />
          <Button title="Login" style={styles.button} onPress={handleClick} />
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  textinput:{
    borderWidth:3,
    margin:10,
    fontSize:20,
    
  },
  button: {
    margin: 20,
  },
});
