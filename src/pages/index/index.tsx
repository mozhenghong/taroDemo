import { View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import styles from './index.module.scss'
import { addCount } from '@/store/slices/home'
import { useDispatch, useSelector } from '@/store'
import { Button } from '@nutui/nutui-react-taro'

function Index() {
  const dispatch = useDispatch();
  const { count } = useSelector(state => state.home);

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className={styles.index}>
      {/* 测试redux */}
      {count}
      <View onClick={()=> dispatch(addCount(4))}>add count</View>
      {/* 测试UI库 */}
       <Button openType='share'>分享给好友</Button>
       <Button type="primary">主要按钮</Button>
    </View>
  )
}

export default Index
