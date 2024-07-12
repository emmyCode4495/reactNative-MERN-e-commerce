import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation, useRoute } from '@react-navigation/native'

const Footer = () => {
  const navigation = useNavigation()
  const route = useRoute()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuContainer}i
      onPress={()=>navigation.navigate("home")}
      >
      <Icon
           name="home"
           style={[styles.icon,  route.name === "home" && styles.active]}
           />
        <Text style={[styles.iconText, route.name === "home" && styles.active]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuContainer}
       onPress={()=>navigation.navigate('notification')}
      >
      <Icon
           name="bells"
           style={[styles.icon,  route.name === "notification" && styles.active]}
           />
        <Text style={[styles.iconText, route.name === "notification" && styles.active]}>notification</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuContainer}
       onPress={()=>navigation.navigate('account')}
      >
      <Icon
           name="user"
           style={[styles.icon, route.name === "account" && styles.active]}
           />
        <Text style={[styles.iconText, route.name === "account" && styles.active]}>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuContainer}
       onPress={()=>navigation.navigate("cart")}
      >
      <Icon
           name="shoppingcart"
           style={[styles.icon, route.name === "cart" && styles.active]}
           />
        <Text style={[styles.iconText, route.name === "cart" && styles.active]}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuContainer}
       onPress={()=>{alert("Logout successfully"), navigation.navigate("login")}}
      >
      <Icon
           name="logout"
           style={[styles.icon, route.name === "logout" && styles.active]}
           />
        <Text style={[styles.iconText, route.name === "logout" && styles.active]}>Log out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:10
  },
  menuContainer:{
    alignItems:'center',
    justifyContent:'center'
  },
  icon:{
    fontSize:25,
    color:"#000000"
  },
  iconText:{
    color:"#000000",
    fontSize:10
  },
  active:{
    color:'blue',

  }
})