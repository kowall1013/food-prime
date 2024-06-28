import { Button } from "@/app/_shared/inputs";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    variant: "contained",
    children: "Contained Button",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Outlined Button",
  },
};
