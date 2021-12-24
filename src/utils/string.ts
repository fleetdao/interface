const generate = (setOfRandomNums: Set<number>, numRandoms: number, numWords: number): Set<number> => {
  if (setOfRandomNums.size === numRandoms) {
    return setOfRandomNums
  }

  const randomNum = Math.round(Math.random() * numWords)
  if (setOfRandomNums.has(randomNum)) {
    return generate(setOfRandomNums, numRandoms, numWords)
  }

  setOfRandomNums.add(randomNum)
  return generate(setOfRandomNums, numRandoms, numWords)
}

export const uint8ArrayToString = (data: Uint8Array): string => {
  let dataString = ''
  for (let i = 0; i < data.length; i++) {
    dataString += String.fromCharCode(data[i])
  }

  return dataString
}

export const truncateString = (str: string, frontLen: number, endLen: number): string => {
  const strLen = str.length
  if (frontLen >= strLen || endLen >= strLen) {
    throw new Error('frontLen or endLen short than str length')
  }
  return str.substring(0, frontLen) + '...' + str.substring(str.length - endLen)
}

// Used in onboarding to generate a set of words that the user has to guess in order to prove they copied their seed phrase down
export const generateRandomWords = (mnemonic: string, numRandoms: number) => {
  const indexes = new Set([])
  return new Set(
    [...generate(indexes, numRandoms, mnemonic.split(' ').length - 1)].sort(
      (a, b) => a - b
    )
  )
}

export default generateRandomWords

