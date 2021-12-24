const PREFIX = 'fleet'

type KeyMap = 'addressKey'

export const authStorageKeys = new Map<KeyMap, string>([
  ['addressKey', `${PREFIX}_address`],
])

export const getStorageItem = (key: KeyMap): string | null => {
  const mappedKey = authStorageKeys.get(key)
  return mappedKey ? localStorage.getItem(mappedKey) : null
}

export const setStorageItem = (key: KeyMap, value: string) => {
  const mappedKey = authStorageKeys.get(key)
  if (mappedKey) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(mappedKey, value)
    }
  }
}

export const removeStorageItem = (key: KeyMap): void => {
  const mappedKey = authStorageKeys.get(key)
  if (mappedKey) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(mappedKey,)
    }
  }
}

export const removeStoredWallet = () => {
  authStorageKeys.forEach((_, key: KeyMap) => {
    removeStorageItem(key)
  })
}
