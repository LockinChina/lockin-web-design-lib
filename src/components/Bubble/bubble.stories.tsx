
import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Story} from '@storybook/react';
import {Bubble} from '../../index';
import {BubbleProps} from './bubble';

export default {
  title: 'Components/Bubble',
  component: Bubble,
  argTypes: {
    // backgroundColor: {control: 'color'},
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<BubbleProps> = (args) => <div style={{width: '300px'}}><Bubble {...args} /></div>;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { 
  messageText: 'Hello, world, I\'m a message text ',
  imUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAB1CAMAAABH2l6OAAAA21BMVEVHcEz////////////////////////////////////////////////////////////////////8X1frV4bjU53uWH36XF3oVo7mVJX4XGPxWXf2W2itVt20Vte6VNHgUqTzWnHbULHWUbaiWOinV+LAVMveUaudWezLUsHFU8b1W2zQUbuVWvSZWfCRW/iNXfqIY/r9naD78/rplc/Yl+Hzlrj93+eFZ/rGmPHusN39x8z+bGT+gn3t0PLieMSEbfr9t7uZfPvscqOrmf32anvJvf7Of9u+a9rZYLzBISMCAAAAEXRSTlMA9jR8qgoaREu141/NiqBGSvpQ4+QAAAPXSURBVGje7dtrW9owFADgcp+AbsXLdIhcHA6RKS1SbSl3dP7/X7Te23CS0CYQvvR87tP3OUmTNieNJIVRzJYOF9liQYKRPSvLB45qroiaxRNZRGRy0YQrGVlQVMN0K7K4KPtsSRYZVbeRC2Whqpxz1JxYVM44bSw4VTfZrGhUrh6hga2wmvhMvJqVpLx49YcknYhXv6VqqqZqqqZqqqJx0VzNRvpUjXGf98FguVx/xLp2h3p9cdFsNh/aM12LoQ4Gzy/D4fpD5Vct9uGh3e7MpjvUvxb6/PzyMnyb73bpasharkZXHdZSh2+Wy6P+jLCdzpdOU/8g7FrlUFG2o9NUlF2qzOp5fNZSE7B0FbDEvn2/32bX7KrHNj32aUZW7201ZOfzKaN6aasI21HJ6hb7tmZVUdYeP6Seff/tsYOAXXKoIesM2xFRhSyj+stjr0OWogKWVYUsSX29hSyj2oIsMddbyLKqUdYdtuRcUdZ+EzCqfcgSc20AllWtQ5aYawOyrKrDXkbY5pisBqw/NzKqNzbrJeuxI7qKsKwqZIm53gVsMDcyqlcW23dZf24kq5BlVR22FWUpKmAZ1RpkaepdA32QWVWEdbqWqHYhy6wClqxCll3dZikqYDlUm62HLFF9dNlGhOVRUZasQpZLRViSOnqELK8assRce5DlUy33xmPJufYQ1pktuNUrf0pWyCrIllcNWaL61APZcqvesO23yCpk+VV/tqCoAevPFntQPXZDuPSr47PdIFtGdYJhDeyVU2u9F2HdbPeiOmx/g11fzdoO24uy/xhVswbYeh3Xs6N2G7KfjKpSw7B9yOpuvcRt40effWVUjRqOrZvoil0d+2Uar2s9lnXVrGLUK2f8hK42jlSHOpHx01VZ64hmDZ9tv7VRFoZhLMarrcJFyH4yVy8XWDX4SkYXXijb1ZlVdUJnzyksc+UH8xTHZl856sO4ZIM3QXRNECnTuKzKoeJ6tob5ON9mezpfLdxMxnqT1IyzAq/VdrHbZRp72Gq8df8FA6vz7zYoJLZOYnehsfY4krKj/eysKHgVstQyTeL9nEXcbC1Wl/elytokZrYrTd6fKqv4Vg7WBP6ieg+7SGi65s4pOV6iCffpDJPKrowD7Q4aCvFNoGjxb5N4T1I1FPiVvFEMNclNmHZCNUNRzImNTyamohha0huku76pmqqpmqqpKlI9wt+tJUk6Fa8Wxf4A70bGPmCQEa3m7f/C80foVvE/hp+4pwzEPk+ZrKsWhA7Zin+OQyRbCc+sFEQ1cvk7eigoL2AAlXPgPFKxcpo/ZJzlStJx4z9/0u7suBUiYgAAAABJRU5ErkJggg==',
  borderColor: '#ccc',
  roleAt: false,
  userName: 'LockinU',
};
