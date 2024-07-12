import { View, Text, TouchableOpacity,
    TextInput, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import InputBox from '../../components/Form/InputBox'

const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () =>{
        if(!email || !password){
            return alert("Add email or password")
        }
        alert("login successfully")
        navigation.navigate("home")
    }
    const loginImage = "data:image/jpeg;base64,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"
  return (
    <View style={styles.container}>
        <Image source={{uri:loginImage}}
        style={styles.image}
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

    <View style={styles.btnContainer}> 
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginBtnText}>Login</Text>
      </TouchableOpacity>
      <Text>
        No account? <Text style={styles.link}
        onPress={()=>navigation.navigate("register")}
        >register</Text>
      </Text>
      
      </View>
    </View>
  )
}

export default Login

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
    loginBtn:{
        backgroundColor:"#000000",
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