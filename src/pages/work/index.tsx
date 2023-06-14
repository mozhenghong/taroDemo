import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import styles from './index.module.scss'

function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className={styles.index}>
      <Text>work page</Text>
    </View>
  )
}

export default Index
