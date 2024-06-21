import { View, Text, ImageBackground, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const navigation=useNavigation();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleLogin=()=>{
    if(email!="" && password!="")
      {
        navigation.navigate("home" ,{
          email:"razik",
          password:password,
        })
      }
      else{
        Alert.alert("please fill the details first!!!!!!")
      }
  }

  return (
    <View>
      <ImageBackground source={require('../assets/bg.jpg')} resizeMode='cover' style={{height:responsiveHeight(100)}}>

      <View style={{alignItems:"center",justifyContent:"center",height:responsiveHeight(100)}}>
      <View style={{width:responsiveWidth(80),height:responsiveHeight(50),borderRadius:10,backgroundColor:"white",alignItems:'center',justifyContent:"center",gap:20}}>

        <Text style={{color:"#011D45",fontWeight:600}}>Sign in to your account</Text>

        <TextInput placeholder='Email' placeholderTextColor="black" style={{borderWidth:1, borderRadius:5, borderColor:"grey",width:responsiveWidth(70),padding:10}} value={email} onChangeText={(text)=>setEmail(text)}/>


        <TextInput placeholder='Password' placeholderTextColor="black" style={{borderWidth:1, borderRadius:5, borderColor:"grey",width:responsiveWidth(70),padding:10}} value={password} onChangeText={(text)=>setPassword(text)}/>


        <TouchableOpacity style={{backgroundColor:"#001533",width:responsiveWidth(70),padding:10}} activeOpacity={0.7} onPress={handleLogin}>
            <Text style={{color:"white",textAlign:"center",fontSize:responsiveFontSize(2),fontWeight:700}}>Login</Text>
        </TouchableOpacity>

        <View>
        <Pressable>
          
          <Text>Foget password</Text></Pressable>
        </View>

      </View>

      </View>

      </ImageBackground>
    </View>
  )
}

export default Login