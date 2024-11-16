import { config as configBase } from "@tamagui/config/v3"
import { createTamagui } from "tamagui"
import * as themes from "./constants/themes"
import { tokens } from "@tamagui/config/v3"

export const config = createTamagui({ tokens, themes, configBase })

export default config

export type Conf = typeof config

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
