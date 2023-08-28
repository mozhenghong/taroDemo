import { View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import styles from './index.module.scss'
import { addCount } from '@/store/slices/home'
import { useDispatch, useSelector } from '@/store';


function Index() {
  const dispatch = useDispatch();
  const { count } = useSelector(state => state.home);
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className={styles.index}>
      {count}
      <View onClick={()=> dispatch(addCount(4))}>add count</View>
    </View>
  )
}

export default Index
