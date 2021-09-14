<template>
  <DonationForm/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DonationForm from '@/components/DonationForm.vue'

@Component({
  components: { DonationForm }
})
export default class index extends Vue {
}
</script>

<style lang="sass" scoped>
</style>
