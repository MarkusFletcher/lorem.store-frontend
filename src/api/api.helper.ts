export const getContentType = () => ({
  'Content-Type': 'application/json',
})

export const errorCatch = (err: any): string => {
  const message = err.response?.data?.message

  return message
    ? typeof message === 'object'
      ? message[0]
      : message
    : err.message
}
