import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import styles from './index.module.scss'
import { useStores } from '@/store'
import { observer } from 'mobx-react'

function Index() {
  const { userStore: { addCount, count } } = useStores();

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className={styles.index}>
      <Text>{count}</Text>
      <View onClick={() => addCount(7)}>add count</View>
    </View>
  )
}

export default observer(Index)
