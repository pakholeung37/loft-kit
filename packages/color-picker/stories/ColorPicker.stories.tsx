import { Story, Meta } from '@storybook/html'
import { ColorPicker, ColorPickerProps } from '../src'

export default {
  title: 'ColorPicker',
} as Meta

const Template: Story<ColorPickerProps> = args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return (
    <div className="w-52">
      <ColorPicker hsv={[20, 100, 100]} alpha={0} />
    </div>
  ) as Element
}

export const Basic = Template.bind({})
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
