import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import styles from './index.module.scss'
import Taro from '@tarojs/taro'

export default function Home() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className={styles.index}>
      <Text onClick={()=>Taro.navigateTo({url: '/pages/work/index'})}>这是home</Text>
    </View>
  )
}
