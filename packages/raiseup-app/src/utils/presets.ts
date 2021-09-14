export const Presets = [40, 100, 200, 1000, 2500, 5000]
export const Suggestion = 40

export const CurrenciesValues = [
  { name: 'US Dollar', code: 'USD', symbol: '$', rate: 1 },
  { name: 'Euro', code: 'EUR', symbol: '€', rate: 0.897597 },
  { name: 'British Pound', code: 'GBP', symbol: '£', rate: 0.81755 },
  { name: 'Russian Ruble', code: 'RUB', symbol: '₽', rate: 63.461993 }
]

export const Rates = CurrenciesValues.reduce((acc, x) => {
  acc[x.code] = x.rate

  return acc
}, {} as { [key: string]: number })
