import { View, Text, StyleSheet, ScrollView,Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { userData } from '../data/userData'
import InputBox from '../components/Form/InputBox'

const Profile = ({navigation}) => {
    const [name, setName] = useState(userData.name)
    const [email, setEmail] = useState(userData.email)
    const [profilePic, setProfilePic] = useState(userData.profilePic)
    const [password, setPassword] = useState(userData.password)
    const [address, setAddress] = useState(userData.address)
    const [city, setCity] = useState(userData.city)
    const [contact, setContact] = useState(userData.contact)

    const handleUpdate = () =>{
        if(!email || !password || !name || !address || !city || !contact){
            return alert("Add email or password or name")
        }
        alert("Updated successfully")
        navigation.navigate("account")
    }
  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image
                source={{uri:profilePic}}
                style={styles.image}
                />
                <Pressable onPress={()=>alert("Update pics")}>
                    <Text style={{color:'red'}}>
                        update your profile picture
                    </Text>
                  
                </Pressable>
            </View>
            <InputBox
                value={name}
                setValue={setName}
                placeholder={"Name"}
                autoComplete={'name'}    
            />
              <InputBox
                value={email}
                setValue={setEmail}
                placeholder={"Email"}
                autoComplete={'email'}    
            />
                <InputBox
                value={password}
                setValue={setPassword}
                placeholder={"Password"}
                autoComplete={'password'} 
                secureTextEntry={true}   
            />
             <InputBox
                value={address}
                setValue={setAddress}
                placeholder={"Address"}
                autoComplete={'address-line1'}    
            />
             <InputBox
                value={city}
                setValue={setCity}
                placeholder={"city"}
                autoComplete={'country'}    
            />
              <InputBox
                value={contact}
                setValue={setContact}
                placeholder={"contact"}
                autoComplete={'tel'}    
            />
            <TouchableOpacity style={styles.updateBtn} onPress={handleUpdate}>
                <Text style={styles.updateBtnText}>Update Profile</Text>
            </TouchableOpacity>
        </ScrollView>
      </View>
    </Layout>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        marginVertical:20
    },
    imageContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        height:100,
        width:"100%",
        resizeMode:'contain'
    },
    updateBtn:{
        backgroundColor:"#000000",
        height:40,
        borderRadius:30,
        justifyContent:'center',
        marginTop:10,
        alignItems:'center',
        marginHorizontal:30
    },
    updateBtnText:{
        color:"#ffffff",
        fontSize:19,
        textTransform:'uppercase'
    }
})