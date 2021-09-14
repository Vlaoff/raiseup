<template>
  <div class="suggestion-button cursor-pointer rounded p-1 text-center" :class="classes">
    {{ formattedAmount }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Currencies } from 'Shared/utils/Types'

@Component({
})
export default class SuggestionButtons extends Vue {
  @Prop({ required: true }) amount!: number
  @Prop({ required: true }) value!: number
  @Prop({ default: Currencies.USD}) currency: Currencies

  get classes () {
    return {
      'bg-blue-200': !this.matchesValue,
      'bg-blue-400': this.matchesValue
    }
  }

  get formattedAmount () {
    return Intl.NumberFormat('en-US', { style: 'currency', currency: this.currency, maximumSignificantDigits: 2 }).format(this.amount)
  }

  get matchesValue () {
    return this.amount === this.value
  }
}
</script>

<style lang="sass" scoped>
</style>
