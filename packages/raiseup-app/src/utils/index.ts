export const getBeautifulNumber = (input: number): number => {
  if (input < 150) {
    return Math.round(input / 10) * 10
  } else if (input < 1000) {
    return Math.round(input / 50) * 50
  } else if (input < 5000) {
    return Math.round(input / 500) * 500
  } else {
    const multiplier = Math.pow(10, String(Math.round(input)).length - 1) / 2

    return Math.round(input / multiplier) * multiplier
  }
}
