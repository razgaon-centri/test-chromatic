import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { Test2Component } from './test2.component';

export default {
  title: 'Test2Component',
  component: Test2Component,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<Test2Component>;

const Template: Story<Test2Component> = (args: Test2Component) => ({
  component: Test2Component,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}