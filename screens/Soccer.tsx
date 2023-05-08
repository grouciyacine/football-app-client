import { View, Text, Image,TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Button } from '@rneui/base'
import { makeRequest } from '../axios'
import { useNavigation } from '@react-navigation/native'
import { RootNavig } from '../App'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type Props = {
}
export type NavigationProp = NativeStackNavigationProp<RootNavig, "Soccer">;

const Soccer = (props: Props) => {
  const navigate=useNavigation<NavigationProp>()
    const [data,setData]=useState<any[]>([])
      useEffect(() => {
        makeRequest.get('foot/get/ligues')
          .then(response => setData(response.data))
          .catch(error => console.error(error));
      }, []);
return (
<ScrollView className='flex   bg-slate-200 flex-1 '>
        <View className='w-full'>
 {data.map((image,key:number) => (
  <>
          <TouchableOpacity className=' p-3 ' onPress={()=>navigate.navigate('Ligue',{image})} key={key}>
        <Image
          key={image.id}
          source={{ uri: `data:image/png;base64,${image.img}` }}
          style={{ width:200, height: 200 ,borderRadius:4}}
        />
        </TouchableOpacity>
        <Text className='border-b-2 border-[#4CB050] text-xl pl-3'>{image?.title}</Text>
  </>

      ))}

    </View>
    </ScrollView>

  )
}

export default Soccer