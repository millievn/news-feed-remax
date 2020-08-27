import { AppConfig } from 'remax/wechat'

const config: AppConfig = {
  pages: ['pages/index/index', 'pages/news/index'],
  window: {
    navigationBarTitleText: 'News Feed',
    navigationBarTextStyle: 'black',
    navigationBarBackgroundColor: '#fff',
    backgroundColor: '#fff',
    backgroundTextStyle: 'light',
  },
  tabBar: {
    color: '#666',
    selectedColor: '#999',
    backgroundColor: '#fff',
    borderStyle: 'black',
    position: 'top',
    list: [
      {
        pagePath: 'pages/index/index',
        text: 'index',
      },
      {
        pagePath: 'pages/news/index',
        text: 'news',
      },
    ],
  },
}

export default config
