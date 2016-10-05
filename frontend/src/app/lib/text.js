import { dig } from './utils'

export const asyncText = (data, textParts) => {
  if (data.loading) return '\u00a0'

  return textParts.map(part => dig(data, ...part.split('.'))).join(" ")
}
