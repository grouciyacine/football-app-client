import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'
import { FontAwesome,Ionicons,MaterialCommunityIcons} from '@expo/vector-icons'
import { RootNavig } from '../App'
import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
type Props = {}
export type NavigationProp=NativeStackNavigationProp<RootNavig,'Home'>
const Home = (props: Props) => {
  const nav=useNavigation<NavigationProp>()
  return (
    <View className='flex flex-col justify-center items-center  bg-slate-200 flex-1'>
      <Text className='uppercase -tracking-tight'>Chose Sport You Like</Text>

      <View className='flex flex-row '>
        <View className=' p-3  w-[160px]'>
          <Button title='Basket' onPress={()=>{nav.navigate('Soccer')}} color='#4CB050'>
            <Text className='text-white p-2'>Soccer</Text>
            <FontAwesome name='soccer-ball-o' color='white' size={20} />
          </Button>
        </View>
        <View className=' p-3 ml-5 w-[160px]'>
        <Button title='Basket'  color='#4CB050'>
            <Text className='text-white p-2'>Basket</Text>
            <Ionicons name='ios-basketball-outline' color='white' size={24} />
          </Button>
        </View>
      </View>
      <View className='flex flex-row '>
        <View className=' p-3  w-[160px]'>
          <Button title='Basket'  color='#4CB050'>
            <Text className='text-white p-2'>NFL</Text>
            <MaterialCommunityIcons name='football-helmet' color='white' size={20} />
          </Button>
        </View>
        <View className=' p-3 ml-5 w-[160px]'>
        <Button title='Basket'  color='#4CB050'>
            <Text className='text-white p-2'>Handball</Text>
            <MaterialCommunityIcons name='handball' color='white' size={24} />
          </Button>
        </View>
      </View>
      <View className='flex flex-row '>
        <View className=' p-3  w-[160px]'>
          <Button title='Basket'  color='#4CB050'>
            <Text className='text-white p-2'>BOX</Text>
            <MaterialCommunityIcons name='boxing-glove' color='white' size={20} />
          </Button>
        </View>
        <View className=' p-3 ml-5 w-[160px]'>
        <Button title='Basket'  color='#4CB050'>
            <Text className='text-white p-2'>Tennis</Text>
            <MaterialCommunityIcons name='tennis-ball' color='white' size={24} />
          </Button>
        </View>
      </View>
    </View>
  )
}

export default Home