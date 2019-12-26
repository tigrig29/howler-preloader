/**
 * preload audio files and return `Promise` ( When that loading is done, it resolves the promise )
 * @param arrayOfUrl array of audio files url
 * @returns Array of loaded audio
 */
function jsAudioPreloader(arrayOfUrl: string[]): Promise<HTMLAudioElement[]> {
  const loadedAudios: HTMLAudioElement[] = []

  const audios: HTMLAudioElement[] = []
  let i = 0
  const length = arrayOfUrl.length
  return new Promise(resolve => {
    arrayOfUrl.forEach(function(value: string, index: number) {
      const audio: HTMLAudioElement = (audios[index] = new Audio())
      // エラー時
      audio.addEventListener('error', () => {
        if (audio.error) {
          console.log(
            'Error ' + audio.error.code + '; details: ' + audio.error.message
          )
        }
      })
      // ロード終了を待つ（完全に再生できる状態まで待つ）
      audio.addEventListener('play', () => {
        // 再生してしまっているので、即時停止する
        audio.pause()
        audio.currentTime = 0
        // load 済みオブジェクトとして保管
        loadedAudios.push(audio)
        i++
        if (i === length) resolve(loadedAudios)
        audio.removeEventListener('play', () => {})
      })
      // ロード開始
      audio.src = value
      audio.volume = 0
      audio.play()
    })
  })
}

export default jsAudioPreloader
