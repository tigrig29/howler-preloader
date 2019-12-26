/**
 * preload audio files and return `Promise` ( When that loading is done, it resolves the promise )
 * @param arrayOfUrl array of audio files url
 * @returns Array of loaded audio
 */
declare function jsAudioPreloader(arrayOfUrl: string[]): Promise<HTMLAudioElement[]>;
export default jsAudioPreloader;
