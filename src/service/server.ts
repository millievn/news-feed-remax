import { Fly as IFly } from 'flyio'
import Fly from 'flyio/dist/npm/wx'
const fly: IFly = new Fly()

const DEBUG = process.env.NODE_ENV === 'development'

// 封装 fetch 方法
const flyFetch = async (url: string, { body: data, ...fetchOptions }: any = {}): Promise<any> => {
  try {
    let res = (await fly.request(url, data, {
      ...fetchOptions,
    })) as any

    if (res) {
      res.text = () => Promise.resolve(JSON.stringify(res.data))
    } else {
      res = { text: () => Promise.resolve(JSON.stringify(res.data)) }
    }

    return res
  } catch (e) {
    if (DEBUG) {
      /* eslint-disable-next-line no-console  */
      console.log(e)
    }
  }
}

export default flyFetch
