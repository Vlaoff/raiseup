<template>
  <form class="donation-form container mx-auto max-w-sm py-10" @submit.prevent="submitForm">
    <div class="grid grid-cols-3 gap-4 mb-10">
      <template v-for="(amount, index) in suggestions">
        <SuggestionButton
          :key="index"
          :amount="amount"
          :value="value"
          @click.native="setValue(index)"
          :currency="currency"
        />
      </template>
    </div>


    <input v-model="value" class="rounded border border-gray-100 p-1" @input="onManualInput"/>

    <select v-model="currency">
      <template v-for="c in currencyOptions">
        <option :value="c" :key="c">{{ c }}</option>
      </template>
    </select>

    <button type="submit" :disabled="!canSubmit" class="block mt-4 rounded bg-blue-400 w-full text-white p-1">Donate</button>

  </form>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import SuggestionButton from '@/components/SuggestionButton.vue'
import { Currencies } from 'Shared/utils/Types'
import { Presets, Rates, Suggestion } from '@/utils/presets'
import { getBeautifulNumber } from '@/utils'

@Component({
  components: { SuggestionButton }
})
export default class DonationForm extends Vue {
  currency = Currencies.USD
  value = Number(Suggestion)
  isInputModified = false
  suggestionIndex = 0

  @Watch('currency')
  onCurrencyChange (currency, oldCurrency) {
    if (this.isInputModified) {
      const rate = Rates[currency]
      const oldRate = Rates[oldCurrency]

      const usdValue = this.value / oldRate
      this.value = Math.round(usdValue * rate)
    } else {
      this.value = this.suggestions[this.suggestionIndex]
    }
  }

  get rate () {
    return Rates[this.currency]
  }

  get suggestions () {
    return Presets.map((x) => {
      return getBeautifulNumber(x * this.rate)
    })
  }

  get currencyOptions () {
    return Object.values(Currencies)
  }

  get canSubmit () {
    return this.value
  }

  setValue (index: number) {
    this.isInputModified = false
    this.suggestionIndex = index
    this.value = this.suggestions[index]
  }

  onManualInput (e: InputEvent) {
    const target = e.target as HTMLInputElement
    const value = target.value
    this.value = value ? Number(String(value).replace(/[^\d]/g, '')) : null
    target.value = String(this.value)

    const perfectMathIndex = this.suggestions.findIndex(x => x === this.value)

    if (perfectMathIndex < 0) {
      this.isInputModified = true
    } else {
      this.isInputModified = false
      this.suggestionIndex = perfectMathIndex
    }
  }

  async submitForm () {
    if (!this.canSubmit) {
      return
    }

    await this.$axios.$post('donate', {
      amount: this.value,
      currency: this.currency
    }).catch((e) => {
      alert(e)
    })

    alert('Thank you for your donation!')
  }
}
</script>

<style lang="sass" scoped>
</style>
