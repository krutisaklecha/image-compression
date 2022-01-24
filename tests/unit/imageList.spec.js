import ImageList from "../../src/components/ImageList";
import tableList from "../../src/components/Table";
import {shallowMount} from '@vue/test-utils';

describe('ImageList.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(ImageList, {
            data() {
                return {}
            }
        });
    })
    it('is a Vue name correct', () => {
        expect(typeof ImageList.data).toBe('function');
        expect(ImageList.components).toStrictEqual({tableList});
    });
    it('should test addItem method ', () => {
        let item = {
            id: 1,
            url: 'test'
        }
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.addItem(item)).toBeCalledTimes(1)
        });
    });
    it('should test removeItem method ', () => {
        let item = 1;
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.removeItem(item)).toBeCalledTimes(1)
        });
    });
})
