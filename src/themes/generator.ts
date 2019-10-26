import { ThemeConfiguration } from '../models'
import { standardColors, vividColors } from './colors'
import { editorTokens } from './editor'
import {
  alwaysBoldTokens,
  alwaysItalicTokens,
  boldTokens,
  getStandardTokens,
  italicTokens,
} from './token-groups'

export function generateTheme(configuration: ThemeConfiguration) {
  const colors = configuration.vivid ? vividColors : standardColors

  const tokenColors = [
    getStandardTokens(colors),
    alwaysItalicTokens,
    alwaysBoldTokens,
    configuration.italic && italicTokens,
    configuration.bold && boldTokens,
  ]
    .filter(Boolean)
    .reduce((aggregate, curr) => aggregate.concat(...curr), [])

  return {
    colors: editorTokens,
    name: 'One Dark',
    tokenColors,
    type: 'dark',
  }
}