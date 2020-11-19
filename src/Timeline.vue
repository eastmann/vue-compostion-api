<template>
    <nav class="panel is-primary">
        <p class="panel-tabs">
            <a v-for="period in periods"
               :key="period"
               :class="period === selectedPeriod ? 'is-active' : null"
               @click="setPeriod(period)"
               data-test="period">
                {{ period }}
            </a>
        </p>
    </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Period } from './types'

const Timeline = defineComponent({
    setup() {
        const periods: Period[] = ['Today', 'This week', 'This month']
        const selectedPeriod = ref<Period>('Today')

        const setPeriod = (period: Period) => {
            selectedPeriod.value = period
        }

        return {
            periods,
            selectedPeriod,
            setPeriod
        }
    }
})

export default Timeline

</script>
