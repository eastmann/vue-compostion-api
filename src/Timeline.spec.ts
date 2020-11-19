import 'jest'
import { mount } from '@vue/test-utils'
import Timeline from './Timeline.vue';
import { nextTick, triggerRef } from 'vue';

describe('Timeline', () => {
    it('Renders 3 time periods', () => {
        const wrapper = mount(Timeline)
        const $periods = wrapper.findAll('[data-test="period"]')
        expect($periods).toHaveLength(3)
    })

    it('Updates period when clicked', async () => {
        const wrapper = mount(Timeline)
        const $periods = wrapper.findAll('[data-test="period"]')

        const $today = $periods[0]
        expect($today.classes()).toContain('is-active')

        const $thisWeek = $periods[1]
        $thisWeek.trigger('click')
        await nextTick()

        expect($thisWeek.classes()).toContain('is-active')
        expect($today.classes()).not.toContain('is-active')

        const $thisMonth = $periods[2]
        // Using shorthand for nextTick()
        await $thisMonth.trigger('click')

        expect($thisMonth.classes()).toContain('is-active')
        expect($thisWeek.classes()).not.toContain('is-active')
    })
})
