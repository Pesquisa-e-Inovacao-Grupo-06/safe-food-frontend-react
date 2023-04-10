import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '.';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = (args) => (
    <Button {...args} />
);

Primary.args = {
  children: "EXAMPLE",
  disabled: false,
  buttonStyle: 'filled',
  loading: false
}