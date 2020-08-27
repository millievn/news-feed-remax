import React from 'react'
import { View, Image } from 'remax/wechat'
import { Icon } from 'anna-remax-ui'

import styles from './index.module.scss'
import { News } from '../../../typings/data.d'
import { H1, H5 } from '../text'

export default function NewsCard({ title, description, urlToImage }: News) {
  return (
    <View className={styles.card}>
      <View className={styles.container}>
        <View className={styles.image}>
          <Image src={urlToImage} mode='aspectFit' lazyLoad />
        </View>
        <View className={styles.content}>
          <H1 singleline>{title} </H1>
          <H5 maxLine={5}>{description} </H5>
        </View>
      </View>
      <View className={styles.footer}>
        <Icon type='like' size='40px' />
        <Icon type='favor' size='40px' />
        <Icon type='comment' size='40px' />
        <Icon type='right' size='40px' />
      </View>
    </View>
  )
}
