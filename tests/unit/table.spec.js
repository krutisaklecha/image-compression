import { mount } from '@vue/test-utils';
import Table from '../../src/components/Table';

describe('Table.vue', () => {
  it('renders props.items when passed', () => {
    const wrapper = mount(Table, {
      propsData: {
        items: 1
      }
    })
    expect(wrapper.props().items).toBe(1)
    expect(wrapper.props('items')).toBe(1)
  })
})
