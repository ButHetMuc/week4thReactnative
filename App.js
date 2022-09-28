import React from 'react';
import { useState } from 'react';
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,Button } from 'react-native';
import bookImage from "./images/book.png";
import styles from './style/styles';
import globalText from './style/globalStyle';
const textStyle = globalText.textStyle;


export default function App() {
  const [number,setNumber] = useState(1);
  const [price,setPrice] = useState(14100);
  const staticPrice = 14100;
  const onpressDecrease = ()=>{
    if(number>=2){
      setPrice((number-1)*staticPrice); 
      setNumber(number-1);
    }else{
      setNumber(1);
      setPrice(staticPrice);
    }
  }
  
  const onpressIncrease = ()=>{

    setPrice((number+1)*staticPrice); 
    setNumber(number+1);
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style = {styles.top}> 

        <View style = {styles.topUp}>
          <View style = {styles.topUpLeft}>
            <Image source={bookImage}/>
          </View>

          <View style = {styles.topUpRight}>
            <View style = {styles.topRightText}>
              <Text style ={textStyle}>nguyên hàm tích phân ứng dụng</Text>
              <Text style ={textStyle}>cung cấp bởi butprovjp123</Text>
              <Text style={{color:'red',fontSize:18}}>{price}</Text>
              <Text style = {styles.originPrice} >152 000</Text>
            </View>

            <View style = {styles.topRightAmount}>
            <Stack fill center spacing={1}>
              <IconButton icon={props => <Icon name="minus" {...props} style = {styles.iconButton}/>} onPress = {onpressDecrease} />\
            </Stack>
            <Text style ={textStyle} >{number} </Text>
            <Stack fill center spacing={1}>
              <IconButton icon={props => <Icon name="plus" {...props} style = {styles.iconButton}/>} onPress = {onpressIncrease}/>\
            </Stack>
            <Text style ={textStyle}>mua sau</Text>
            </View>

          </View>
        </View>

        <View style= {styles.discount}>
        <Text style ={textStyle}> ma giam gia da luu</Text>
        <Text style ={textStyle}> xem tai day</Text>
        </View>

        <View style = {styles.topDown}>
          <TextInput style = {{ borderColor:'black',borderWidth:1,width:'50%'}} placeholder = 'Ma giam gia' />
          <Button variant='outlined' title = 'AP DUNG'/>
        </View>
      </View>

      <View style = {styles.mid}>
        <View style = {styles.midTop}>
          <Text style ={textStyle}>ban co phieu qua tang tiki/gotit/urbox</Text>
          <Text style ={textStyle}>nhap tai day</Text>
        </View>
        <View style={styles.midBot}>
          <Text style ={textStyle}>Tam tinh</Text>
          <Text style ={textStyle}>{price}</Text>
        </View>      
      </View>
      <View style = {styles.bottom}>
        <View style ={styles.bottomUp}>
          <Text style ={textStyle}>Thanh tien</Text>
          <Text style ={globalText.redText}>{price}</Text>
        </View>
        <View style = {styles.button}>
          <Button title='DAT HANG'  ></Button>
        </View>
      </View>
    </View>
  );
}
