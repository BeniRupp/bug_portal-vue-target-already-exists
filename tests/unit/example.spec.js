import {createLocalVue, mount} from "@vue/test-utils"
import PortalVue from 'portal-vue'

describe('example', () => {
  it('first', () => {
    const localVue = createLocalVue()
    localVue.use(PortalVue)
    const w = mount(
        {
          template: '<div><portal-target name="berlin"></portal-target></div>',
        },
        { localVue }
    )
  })
  it('second', () => {
    const localVue = createLocalVue()
    localVue.use(PortalVue)
    const w = mount(
        {
          template: '<div><portal-target name="berlin"></portal-target></div>',
        },
        { localVue }
    )
  })
})
