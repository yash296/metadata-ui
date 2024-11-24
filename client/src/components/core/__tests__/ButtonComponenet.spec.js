import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import ButtonComponent from '@/components/core/ButtonComponent.vue';

describe('ButtonComponent.vue', () => {
    it('renders the button with the correct label', () => {
        const wrapper = mount(ButtonComponent, {
            props: { label: 'Click Me' }
        });

        expect(wrapper.text()).toBe('Click Me');
    });

    it('applies the correct class based on the className prop', () => {
        const wrapper = mount(ButtonComponent, {
            props: { className: 'custom-class' }
        });

        expect(wrapper.find('button').classes()).toContain('custom-class');
    });

    it('emits the onButtonClick event when clickAsEmit is true', async () => {
        const wrapper = mount(ButtonComponent, {
            props: { label: 'Click Me', clickAsEmit: true }
        });

        await wrapper.find('button').trigger('click');
        expect(wrapper.emitted()).toHaveProperty('onButtonClick');
    });

    it('does not emit event but calls the alert function when clickAsEmit is false', async () => {
        global.alert = vi.fn(); // Mock the alert function

        const wrapper = mount(ButtonComponent, {
            props: { label: 'Click Me', clickAsEmit: false, onClick: 'API placeholder' }
        });

        await wrapper.find('button').trigger('click');
        expect(global.alert).toHaveBeenCalledWith('placeholder for api: API placeholder');
        expect(wrapper.emitted()).not.toHaveProperty('onButtonClick');
    });

    it('has default props when none are provided', () => {
        const wrapper = mount(ButtonComponent, {
            props: { label: 'Default Test' }
        });

        expect(wrapper.props('className')).toBe('');
        expect(wrapper.props('onClick')).toBe('');
        expect(wrapper.props('isFormData')).toBe(false);
        expect(wrapper.props('clickAsEmit')).toBe(false);
    });
});
