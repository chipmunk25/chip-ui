import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/ui";

// export default {
//   title: 'React/Button',
//   argTypes: {
//     text: { control: 'text' },
//     isDisabled: { control: 'boolean' },
//     shadow: { control: 'boolean' },
//     size: {
//       control: { type: 'select', options: ['small', 'medium', 'large'] },
//     },
//     type: {
//       control: { type: 'select', options: ['filled', 'outline', 'text'] },
//     },
//     textColor: {
//       control: { type: 'select', options: ['default', 'white', 'primary'] },
//     },
//   },
// };

// const Template = (args) => <Button {...args} />;

const meta: Meta<typeof Button> = {
  component: Button,

  // title: "React/Button",
  // argTypes: {
  //   size: {
  //     control: { type: "select", options: ["small", "medium", "large"] },
  //   },
  // },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Button",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Button",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Button",
    variant: "link",
  },
};
