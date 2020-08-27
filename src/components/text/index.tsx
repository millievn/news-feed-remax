import React, { CSSProperties } from 'react'
import { Text, TextProps, View } from 'remax/wechat'

import styles from './index.module.scss'
interface TTextProps extends TextProps {
  children?: React.ReactNode
  singleline?: boolean
  maxLine?: number
}

// eslint-disable-next-line react/display-name
const generate = (tag: string) =>
  function HText(props: TTextProps) {
    if (props.singleline) {
      return (
        <View className={styles.singleline}>
          <Text {...props} className={`${props.className ?? ''} ${styles[tag]} `}>
            {props.children}
          </Text>
        </View>
      )
    }

    return (
      <Text
        {...props}
        className={`${props.className ?? ''} ${styles[tag]} ${props.maxLine && styles.maxline}`}
        style={{ WebkitLineClamp: props.maxLine }}
      >
        {props.children}
      </Text>
    )
  }

export const H1 = generate('h1')
export const H2 = generate('h2')
export const H3 = generate('h3')
export const H5 = generate('h5')
