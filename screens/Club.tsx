import { View,Image ,Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { makeRequest } from '../axios'
import ColorConverter from "string-color-converter";
import { FontAwesome5, MaterialCommunityIcons,AntDesign, Fontisto } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import * as Animtable from 'react-native-animatable'
type Props = {
    data:any
}

const Club = (props: Props) => {
    const rout=useRoute()
    const [stade,setStade]=useState<any[]>()
    const [players,setPlayers]=useState<any[]>()
    const [d,setD]=useState<any[]>()
    const [M,setM]=useState<any[]>()
    const [S,setS]=useState<any[]>()
    const {data}:any= rout.params
    useEffect(()=>{
      const getStade=async()=>{
        try{
        const res=await makeRequest.get(`/liga/bundesliga/getStade/${data?.id}`)
        const resPlayer=await makeRequest.get(`/players/get/${data?.id}`)
        const resD=await makeRequest.get(`/players/getD/${data?.id}`)
        const resM=await makeRequest.get(`/players/getM/${data?.id}`)
        const resS=await makeRequest.get(`/players/getS/${data?.id}`)
        setStade(res.data)
        setPlayers(resPlayer.data)
        setD(resD.data)
        setS(resS.data)
        setM(resM.data)
        }catch(e){
        console.log(e)
        }
      }
getStade()
    },[data])
const color=ColorConverter(data?.color)
console.log(players)
  return (

      <ScrollView>
    <View className={`w-full h-[114]`}  style={{backgroundColor:color.hex}}>
      <View className='flex flex-row p-2 justify-start mr-7'>
        <Image source={{uri:`${data.img}`}} className='w-[100] h-[100] mr-2'/>
        <View className='flex flex-col '>
        <Text className='text-center uppercase text-xl text-white'>{data.name}</Text>
        <View className='flex flex-row items-center'>
            <MaterialCommunityIcons name='stadium' size={24} color="#ffffff"/>
            <Text className='text-white p-2'>{stade?stade[0]?.name:""}</Text>
        </View>
        </View>
      </View>
      </View>
      <View>
        <Text className='text-center'>Stade</Text>
        <View className='flex flex-row'>
          <Image source={{uri:`${stade?stade[0]?.img:"https://cdn.afrique-sur7.ci/700x400/articles/2021/10/Les%20plus%20beaux%20stades%20du%20monde.jpg"}`}} className='w-[200] h-[200] rounded-sm m-2'
          />
          <View className='flex flex-col'>
            <Text className='pl-1'>name: {stade?stade[0]?.name:""}</Text>
          <View className='space-x-3 flex flex-row pt-3'>
            <View className='pl-1 '>
              <FontAwesome5 name='chair' size={15} className='m-3'/>
            </View>
            <Text className='mr-3'>6000</Text>
          </View>
          <View className='pl-1 pt-3'>

          <View className='flex flex-row p-1 space-x-1 pt-3'>
            <MaterialCommunityIcons name='city-variant-outline' size={15}/>
            <Text>{stade?stade[0]?.city:""}</Text>
          </View>
          </View>
        </View>
          </View>
      </View>
      <Text className='text-center'>Team</Text>
      <Image source={{uri:`${data?.plan}`}} className='w-83 h-80'
/>
      <Text className='text-2xl text-center'>{players?players[0]?.position:""}</Text>
        {players?.map((player,i:number)=>(
          <View key={i} >
                    <View className='flex flex-row bg-white p-4 m-3'>
                      <Image source={{uri:`${player?.img}`}} className='w-20 h-20'/>
                      <View className='flex flex-col ml-3'>
                        <View className='flex flex-row justify-between items-center'>
                          <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1165/1165159.png'}} className='w-6 h-6'/>
                          <Text className='text-lg pl-2'>{player?.name}</Text>
                        </View>
                        <View className='pl-2'>
                          <Text>{player?.age}</Text>
                          <Image source={{uri:`${player?.cuntry}`}} className='w-4 h-4'/>
                        </View>
                      </View>
        </View>
      </View>
        ))}
            <Text className='text-2xl text-center'>{d?d[0]?.position:""}</Text>
        {d?.map((player,i:number)=>(
        <View key={i} >
        <View className='flex flex-row bg-white p-4 m-3'>
          <Image source={{uri:`${player?.img}`}} className='w-20 h-20'/>
          <View className='flex flex-col ml-3'>
            <View className='flex flex-row justify-between items-center pl-1'>
              <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1372/1372607.png'}} className='w-6 h-6'/>
              <Text className='text-lg pl-2'>{player?.name}</Text>
            </View>
            <View className='pl-2'>
              <Text>{player?.age}</Text>
              <Image source={{uri:`${player?.cuntry}`}} className='w-4 h-4'/>
            </View>
          </View>
</View>
</View>
        ))}
                    <Text className='text-2xl text-center'>{M?M[0]?.position:""}</Text>
        {M?.map((player,i:number)=>(
        <View key={i} >
        <View className='flex flex-row bg-white p-4 m-3'>
          <Image source={{uri:`${player?.img}`}} className='w-20 h-20'/>
          <View className='flex flex-col ml-3'>
            <View className='flex flex-row justify-between items-center pl-1'>
              <Image source={{uri:'https://cdn0.iconfinder.com/data/icons/soccer-10/500/soccer-football-sport_7-512.png'}} className='w-6 h-6'/>
              <Text className='text-lg pl-2'>{player?.name}</Text>
            </View>
            <View className='pl-2'>
              <Text>{player?.age}</Text>
              <Image source={{uri:`${player?.cuntry}`}} className='w-4 h-4'/>
            </View>
          </View>
</View>
</View>
        ))}
                            <Text className='text-2xl text-center'>{S?S[0]?.position:""}</Text>
        {S?.map((player,i:number)=>(
        <View key={i} >
        <View className='flex flex-row bg-white p-4 m-3'>
          <Image source={{uri:`${player?.img}`}} className='w-20 h-20'/>
          <View className='flex flex-col ml-3'>
            <View className='flex flex-row justify-between items-center pl-1'>
              <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1107/1107163.png'}} className='w-6 h-6'/>
              <Text className='text-lg pl-2'>{player?.name}</Text>
            </View>
            <View className='pl-2'>
              <Text>{player?.age}</Text>
              <Image source={{uri:`${player?.cuntry}`}} className='w-4 h-4'/>
            </View>
          </View>
</View>
</View>
        ))}
      <Text className='text-center'>Tshirt</Text>
      <View className='flex flex-row'>
        <Image source={{uri:`${stade?stade[0].t1:"a"}`}} className='w-[200] h-[200]'/>
        <Image source={{uri:`${stade?stade[0].t2:"a"}`}} className='w-[190] h-[200] '/>
      </View>
      <Text className='text-center'>Sponsor</Text>
      <Image source={{uri:`${stade?stade[0].spo1:"a"}`}} className='w-full h-40'/>
      <View>
        <Text className='text-center mt-4'>Contacts</Text>
        
          {stade?.map((data,key:any)=>(
            <View key={key} className='p-5 bg-white m-5'>
              <View className='flex flex-row  items-center'>
            <AntDesign name='phone'  size={25} />
            <Text className='text-xl pl-10'>{data.phone}</Text>
          </View>
          <View className='flex flex-row  items-center' >
            <Fontisto name='email'  size={25}/>
            <Text className='text-xl pl-10'>{data.email}</Text>
          </View>
          <View className='flex flex-row  items-center'>
            <MaterialCommunityIcons name='web' size={25} />
            <Text className='text-xl pl-10'>{data.website}</Text>
          </View>
          <View className='flex flex-row  items-center'>
            <MaterialCommunityIcons name='city-variant-outline' size={25}/>
            <Text className='text-xl pl-10'>{data.city}</Text>
          </View>
        </View>
          ))}
      </View>
    </ScrollView>
  )
}

export default Club