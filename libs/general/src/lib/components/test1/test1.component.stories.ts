import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { Test1Component } from './test1.component';

export default {
  title: 'Test1Component',
  component: Test1Component,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<Test1Component>;

const Template: Story<Test1Component> = (args: Test1Component) => ({
  component: Test1Component,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}
