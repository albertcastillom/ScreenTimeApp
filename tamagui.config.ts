import { defaultConfig } from '@tamagui/config/v5'
import { createTamagui } from 'tamagui'

const config = createTamagui(defaultConfig)

// This unlocks full TypeScript auto-completion for your tokens and themes
type Conf = typeof config
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config