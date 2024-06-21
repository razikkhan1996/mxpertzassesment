import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

const Registration = () => {

  const navigation=useNavigation();

  const [Username,setUserName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [cpassword,setCPassword]=useState("");

  const handleRegister=()=>{

    if(Username!="" && email!="" && password!="" && cpassword!="")
      {
        navigation.navigate("login")
      }
      else{
        Alert.alert("please fill the details first!!!!!!")
      }

  }

  return (
    <>
    <View style={{backgroundColor:"#F8CE58",height:responsiveHeight(8),alignItems:"center",justifyContent:"flex-end",padding:10,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
      <Text style={{fontWeight:900,fontSize:responsiveFontSize(2)}}>Register with skenu</Text>
    </View>
    <View style={{backgroundColor:"#011D45",alignItems:"center",height:responsiveHeight(90),justifyContent:"center",gap:20}}>
        <TextInput placeholder='Username' placeholderTextColor="white" style={{backgroundColor: "#001533",borderWidth:1, borderColor:"grey",width:responsiveWidth(80),padding:15,color:"white"}} value={Username} onChangeText={(text)=>setUserName(text)}/>

        <TextInput placeholder='Email' placeholderTextColor="white" style={{backgroundColor: "#001533",borderWidth:1, borderColor:"grey",width:responsiveWidth(80),padding:15,color:"white"}} value={email} onChangeText={(text)=>setEmail(text)}/>

        <TextInput placeholder='Password' placeholderTextColor="white" style={{backgroundColor: "#001533",borderWidth:1, borderColor:"grey",width:responsiveWidth(80),padding:15,color:"white"}} value={password} onChangeText={(text)=>setPassword(text)}/>

        <TextInput placeholder='Confirm password' placeholderTextColor="white" style={{backgroundColor: "#001533",borderWidth:1, borderColor:"grey",width:responsiveWidth(80),padding:15,color:"white"}} value={cpassword} onChangeText={(text)=>setCPassword(text)}/>

        <View>
        <Text style={{color:"white",marginLeft:-responsiveWidth(25)}}>Agree terms and condition</Text>
        </View>

        <TouchableOpacity style={{backgroundColor:"#001533",width:responsiveWidth(80),padding:20}} activeOpacity={0.7} onPress={handleRegister}>
            <Text style={{color:"white",textAlign:"center",fontSize:responsiveFontSize(2),fontWeight:700}}>Register</Text>
        </TouchableOpacity>

    </View>

</>
  );
};

export default Registration

const styles = StyleSheet.create({});