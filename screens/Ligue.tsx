import { View, Text,Image,ScrollView ,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { RootNavig } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Animtable from 'react-native-animatable'
import { makeRequest } from '../axios';
type Props = {
    image:any,
}
export type NavigationProp = NativeStackNavigationProp<RootNavig, "Ligue">;
const Ligue = (props: Props) => {
    const rout=useRoute()
    const nav=useNavigation<NavigationProp>()
    const [data,setData]=useState<any[]>()
    const {image}:any =rout.params
    useEffect(()=>{
        makeRequest.get(`/liga/bundesliga/getClubs/${image?.id}`).then((res)=>setData(res.data)).catch(err=>console.log(err))
    },[])
  return (
    <ScrollView className='flex flex-1 bg-slate-200'>
        <Animtable.Image source={{uri: `data:image/png;base64,${image.img}`}}
         className='w-full h-[260] bg-white'
         animation="slideInDown"
         iterationCount={1}
        />
        <Text className='text-center text-2xl font-bold uppercase text-[#4CB050]'>{image.title}</Text>
        <Text className='p-2'>{image.desc}</Text>
        <Text className='text-xl p-2 text-[#4CB050]'>Clubs:</Text>
<View>
        {data?.map((data:any,key:number) =>(
          <View className='border-[#4CB050] border-b-2'key={key}>
                            <TouchableOpacity onPress={()=>nav.navigate('Club',{data})}  className='flex flex-row p-7 w-full  justify-between items-center '> 
                  
                  <Animtable.Image
                  animation='slideInLeft'
          key={image.id}
          source={{ uri: `${data?.img}`}}
          style={{ width:100, height: 100 }}
        />
          <Text>{data?.name}</Text>
        </TouchableOpacity>
          </View>
  
        ))}
</View>

    </ScrollView>
  )
}

export default Ligue