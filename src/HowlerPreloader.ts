import { Howl } from 'howler'

interface LoadedAudio {
  url: string
  audio?: Howl
}

export default class HowlerPreloader {
  loadedAudios: LoadedAudio[] = []
  audiosCount: number = 0

  constructor(arrayOfUrl: string[]) {
    this.audiosCount = arrayOfUrl.length
    for (const url of arrayOfUrl) {
      this.loadedAudios.push({
        url
      })
    }
  }

  load(): Promise<void> {
    const audios: HTMLAudioElement[] = []
    let i = 0
    return new Promise(resolve => {
      const audios: Array<Howl> = []
      let i = 0
      return new Promise(resolve => {
        // ロード処理（loadeddata 等よりも確実な、play を使用）
        arrayOfUrl.forEach(function(value: string, index: number) {
          function loading() {
            // すでに読み込み済みのソースの場合、何もしない
            if (Object.keys(loadedAudios).includes(value)) {
              i++
              if (i === length) resolve()
              return
            }
            // 読み込み
            audios[index] = new Howl({
              src: require(`~/assets/sounds/${value}`),
              onplay: () => {
                // プレイしてしまっているので、即時停止する
                audios[index].stop()
                // load 済みオブジェクトとして保管
                loadedAudios[value] = audios[index]
                i++
                if (i === length) resolve()
                audios[index].off('play')
              }
            })
            audios[index].volume(0)
            audios[index].play()
          }
          loading()
        })
      })
    })
  }
}

/**
 * preload audio files and return `Promise` ( When that loading is done, it resolves the promise )
 * @param arrayOfUrl array of audio files url
 * @returns Array of loaded audio
 */
function jsAudioPreloader(arrayOfUrl: string[]): Promise<HTMLAudioElement[]> {
  const loadedAudios: LoadedAudio[] = []

  const audios: HTMLAudioElement[] = []
  let i = 0
  return new Promise(resolve => {
    const audios: Array<Howl> = []
    let i = 0
    const length = arrayOfUrl.length
    return new Promise(resolve => {
      // ロード処理（loadeddata 等よりも確実な、play を使用）
      arrayOfUrl.forEach(function(value: string, index: number) {
        function loading() {
          // すでに読み込み済みのソースの場合、何もしない
          if (Object.keys(loadedAudios).includes(value)) {
            i++
            if (i === length) resolve()
            return
          }
          // 読み込み
          audios[index] = new Howl({
            src: require(`~/assets/sounds/${value}`),
            onplay: () => {
              // プレイしてしまっているので、即時停止する
              audios[index].stop()
              // load 済みオブジェクトとして保管
              loadedAudios[value] = audios[index]
              i++
              if (i === length) resolve()
              audios[index].off('play')
            }
          })
          audios[index].volume(0)
          audios[index].play()
        }
        loading()
      })
    })
  })
}
