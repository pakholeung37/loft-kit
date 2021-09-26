import { Story, Meta } from '@storybook/html';
import { ColorPicker, ColorPickerProps } from '../ColorPicker';

export default {
  title: 'ColorPicker',
} as Meta;

const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return <ColorPicker hsv={[20, 100, 100]} alpha={0}/>;
};

export const Basic = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
