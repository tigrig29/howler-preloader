import assert = require('assert')
import jsAudioPreloader from '../dist/index'

describe('js-audio-preloader', () => {
  it('should create audio element', async () => {
    const audioUrlArray: string[] = ['./assets/bell01.mp3']
    console.log('load start')
    const loadedAudios: HTMLAudioElement[] = await jsAudioPreloader(
      audioUrlArray
    )
    console.log('load end')
    assert(loadedAudios[0].src !== null)
  })
})
