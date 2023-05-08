import { View, Image, StatusBar } from 'react-native'
import React from 'react'
import{useNavigation} from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootNavig } from '../App';
type Props = {}
export type NavigationProp = NativeStackNavigationProp<RootNavig, "Load">;
const Load = (props: Props) => {
    const navigate=useNavigation<NavigationProp>()
    setTimeout(()=>{
        navigate.navigate('Home')
    },3000)
  return (
    <SafeAreaView>
        <StatusBar hidden={true}/>
        <View style={{position:'relative'}}>
            <Image style={{width:500,height:700}} source={require('../assets/so.jpg')}/>
            <Image source={require('../assets/logo.png')} style={{position:'absolute',width:200,height:200,left:80,top:300,borderRadius:10}}/>
        </View>
    </SafeAreaView>
  )
}

export default Load