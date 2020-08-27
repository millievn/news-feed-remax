import React, { useState, useEffect } from 'react'
import { View } from 'remax/wechat'

import { queryNews } from './data'
import { News } from '../../../typings/data.d'
import NewsCard from '../../components/news-card'

import styles from './index.module.scss'

export default function NewsPage() {
  const [news, setNews] = useState<News[]>([])

  useEffect(() => {
    queryNews().then(data => {
      setNews(data)
    })
  }, [])

  return (
    <View className={styles.app}>
      {news?.map(newsItem => {
        return <NewsCard key={newsItem.title} {...newsItem} />
      })}
    </View>
  )
}
