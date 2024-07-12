import { View, Text, TouchableOpacity,
    TextInput, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../components/Form/InputBox'

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [contact, setContact] = useState('')

    const handleLogin = () =>{
        if(!email || !password || !name || !address || !city || !contact){
            return alert("Add email or password or name")
        }
        alert("register successfully")
        navigation.navigate("login")
    }
    const loginImage = "https://static.vecteezy.com/system/resources/previews/019/552/601/non_2x/sign-up-icon-signup-square-box-on-transparent-background-free-png.png"
  return (
    <View style={styles.container}>
        <Image source={{uri:loginImage}}
        style={styles.image}
        />
          <InputBox 
        placeholder={'Name'}
        autoComplete={'name'}
        value={name}
        setValue={setName}
        />
        <InputBox 
        placeholder={'Email'}
        autoComplete={'email'}
        value={email}
        setValue={setEmail}
        />
         <InputBox 
        placeholder={'Password'}
        secureTextEntry={true}
        value={password}
        setValue={setPassword}
        />
          <InputBox 
        placeholder={'Contact'}
        value={contact}
        setValue={setContact}
        />
          <InputBox 
        placeholder={'Residential Address'}
        value={address}
        setValue={setAddress}
        />
          <InputBox 
        placeholder={'City'}
        value={city}
        setValue={setCity}
        />
    <View style={styles.btnContainer}> 
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
      <Image source={{uri:loginImage}}
        style={styles.image1}
        onPress={handleLogin}
        />
      </TouchableOpacity>
      <Text>
        Already a user? <Text style={styles.link} onPress={()=> navigation.navigate('login')}>login here</Text>
      </Text>
      </View>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        // alignItems:'center',
        height:"100%",
       
    },
    image:{
        height:200,
        width:'100%',
        resizeMode:'contain'
    },
    image1:{
        height:50,
        width:'100%',
        resizeMode:'contain',
        color:'blue'

    },
    loginBtn:{
        // backgroundColor:"#000000",
        width:"80%",
        height:40,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:20,
        borderRadius:20,
        marginVertical:20
    },
    btnContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    loginBtnText:{
        color:"#ffffff",
        fontWeight:'500',
        textTransform:'uppercase',
        textAlign:'center',
        fontSize:10
    },
    link:{
        color:"orange"
    }

})