import assert = require('assert')
import jsAudioPreloader from '../dist/index'

describe('js-audio-preloader', () => {
  it('should create audio element', async () => {
    const audioUrlArray: string[] = ['./assets/bell01.mp3']
    const loadedAudios: HTMLAudioElement[] = await jsAudioPreloader(
      audioUrlArray
    )
    assert(loadedAudios[0].src !== null)
  })
  it('should have src property that equal to audio URL', async () => {
    const audioUrlArray: string[] = ['./assets/bell01.mp3']
    const loadedAudios: HTMLAudioElement[] = await jsAudioPreloader(
      audioUrlArray
    )
    assert(loadedAudios[0].src === audioUrlArray[0])
  })
  it("should fail because do not use 'await' ", () => {
    const audioUrlArray: string[] = ['./assets/bell01.mp3']
    const loadedAudios: any = jsAudioPreloader(audioUrlArray)
    console.log(loadedAudios)
    assert(loadedAudios[0].src === audioUrlArray[0])
  })
  it('should load multiple audio files', async () => {
    const audioUrlArray: string[] = [
      './assets/bell01.mp3',
      './assets/bell02.mp3',
      './assets/curtain.mp3',
      './assets/gatagata.mp3'
    ]
    const loadedAudios: HTMLAudioElement[] = await jsAudioPreloader(
      audioUrlArray
    )
    const result =
      loadedAudios[0].src === audioUrlArray[0] &&
      loadedAudios[1].src === audioUrlArray[1] &&
      loadedAudios[2].src === audioUrlArray[2] &&
      loadedAudios[3].src === audioUrlArray[3]
    assert(result)
  })
})
