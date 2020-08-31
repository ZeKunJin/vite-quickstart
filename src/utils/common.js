export const getRandomKey = (length = DEFAULT_UID_LENGTH) => {
  return Number(
    Math.random()
      .toString()
      .substr(3, length) + Date.now()
  ).toString(36)
}

export const optionalChaining = (obj, ...rest) => {
  let tmp = obj
  for (const key in rest) {
    const name = rest[key]
    tmp = tmp?.[name]
  }
  return tmp
}