# js-audio-preloader

A JavaScript plugin to preload sound files. This plugin returns `Promise`, so it can be used asynchronously.

> JavaScript で複数のサウンドファイルのプリロードを行うプラグインです。非同期的に使用することができ、ロード終了時に処理を実行すること（コールバック）が可能です。

## Install

```bash: yarn
yarn add js-audio-preloader
```

or

```bash: npm
npm install --save js-audio-preloader
```

## Usage

### Example written in JavaScript ( ES6 )

> JavaScript（ES6）での使用例

```javascript: sample.js
const { jsAudioPreloader } = require('js-audio-preloader')

const audios = [
  './assets/sound/test1.mp3',
  './assets/sound/test2.mp3',
  './assets/sound/test3.mp3'
]

const loadedAudios = jsAudioPreloader(audios).then(() => {
  console.log('done!')
})
```

### Example written in TypeScript

> TypeScript での使用例

```typescript: sample.ts
import { jsAudioPreloader } from 'js-audio-preloader'

const audios: String[] = [
  './assets/sound/test1.mp3',
  './assets/sound/test2.mp3',
  './assets/sound/test3.mp3'
]

const loadedAudios: Audio[] = jsAudioPreloader(audios).then(() => {
  console.log('done!')
})
```

### Example using async/await

> async/await を用いた例

```typescript: sample2.ts
import { jsAudioPreloader } from 'js-audio-preloader'

const audios: String[] = [
  './assets/sound/test1.mp3',
  './assets/sound/test2.mp3',
  './assets/sound/test3.mp3'
]

const func: Function = async () => {
  const loadedAudios: Audio[] = await jsAudioPreloader(audios)
  console.log('done!')
}
```
