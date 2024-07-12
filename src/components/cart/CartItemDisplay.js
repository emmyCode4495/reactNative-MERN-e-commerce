import { View, Text, 
    StyleSheet,
    Image,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const CartItemDisplay = ({item}) => {
const [pDetails, setPDetails] = useState({})
const [qnty, setQnty] = useState(1)

const handleAddQty = () =>{
    if (qnty === pDetails?.quantity) return alert("Addition limit reached!")
    setQnty((prev)=> prev + 1)
  }

  const handleMinusQty = () =>{
    if (qnty === 1) return alert("Negative stock not supported!")
    setQnty((prev)=> prev - 1)
  }
  return (
    <View style={styles.container}>
        <Image
        source={{uri:item?.imageUrl}}
        style={styles.image}
        />
        <View>
        <Text style={styles.name}>{item?.name}</Text>
        <Text style={styles.name}>Price: ${item?.price}</Text>
        </View>
        <View style={styles.btnContainer}>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnQty}
            onPress={handleMinusQty}
          >
            <Text style={styles.btnPcsText}>-</Text>
            </TouchableOpacity>
          <Text>{qnty}</Text>
          <TouchableOpacity style={styles.btnQty}
          onPress={handleAddQty}
          >
            <Text style={styles.btnPcsText}>+</Text>
            </TouchableOpacity>
        </View>
      
      </View>
    </View>
  )
}

export default CartItemDisplay

const styles = StyleSheet.create({
    container:{
        margin:10,
        backgroundColor:"#ffffff",
        borderRadius:10,
        flexDirection:'row',
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    image:{
        height:50,
        width:50,
        resizeMode:"contain"
    },
    name:{
        fontSize:10,
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
        marginVertical:20,
        marginHorizontal:10,
      },
      btnQty:{
        backgroundColor:"lightgray",
        width:40,
        alignItems:"center",
        marginHorizontal:10
      },
      btnPcsText:{
        fontSize:20,
        fontWeight:"bold",
      },
})