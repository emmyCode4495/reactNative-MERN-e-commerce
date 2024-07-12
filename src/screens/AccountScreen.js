import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Layout from '../components/Layout/Layout'
import { userData } from '../data/userData'
import Icon from 'react-native-vector-icons/AntDesign'
import AdminIcon from 'react-native-vector-icons/MaterialIcons'


const AccountScreen = ({navigation}) => {
  return (
    <Layout>
        <View style={styles.container}>
            <Image
            source={{uri:userData.profilePic}}
            style={styles.image}
            />
            <View style ={{justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.name}>
                Hi,
                    <Text style={{color:'green'}}> {userData.name}</Text>
                </Text>
                <Text>email: {userData.email}</Text>
                <Text> Contact: {userData.name}</Text>
            </View>
            <View style={styles.btnContainer}>
                <Text style={styles.heading}>Account Setting</Text>
                <TouchableOpacity style={styles.btn}
                onPress={()=>navigation.navigate("profile",{id:userData._id})}
                >
                <Icon
                    name='edit'
                    style={styles.btnText}
                />
                    <Text> Edit Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}
                  onPress={()=>navigation.navigate("orders",{id:userData._id})}
                >
                <Icon
                    name='bars'
                    style={styles.btnText}
                />
                    <Text> My Orders</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}
                onPress={()=>navigation.navigate('notification')}
                >
                <Icon
                    name='bells'
                    style={styles.btnText}
                />
                    <Text>Notifiction</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}
                 onPress={()=>navigation.navigate("admin",{id:userData._id})}
                >
                <AdminIcon
                    name='admin-panel-settings'
                    style={styles.btnText}
                />
                    <Text>Admin Panel</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Layout>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
    container:{
        marginVertical:20
    },
    image:{
        height:100,
        width:'100%',
        resizeMode:'contain',
    },
    name:{
        marginTop:15,
        fontSize:20
    },
    btnContainer:{
        pdding:10,
        backgroundColor:"#ffffff",
        margin:10,
        marginVertical:10,
        elevation:5,
        borderRadius:10,
        paddingBottom:30
    },
    heading:{
        fontSize:20,
        fontWeight:"bold",
        paddingBottom:10,
        textAlign:'center',
        borderBottomWidth:1,
        borderColor:'lightgray'
    },
    btn:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10,
        padding:5
    },
    btnText:{
        fontSize:15,
        marginRight:10
    }
})