"use strict";

import { shallowMount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue';

describe("components.HelloWorld", function() {
  let wrapper;
  beforeEach(function() {
    wrapper = shallowMount(HelloWorld);
  })

  it("should contain string", function() {
    expect(wrapper.text()).toContain('Installed CLI Plugins');
  })
});
