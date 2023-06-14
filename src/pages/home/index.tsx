import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import styles from './index.module.scss'

export default function Home() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className={styles.index}>
      <Text>这是home</Text>
      <Text>home</Text>
    </View>
  )
}
