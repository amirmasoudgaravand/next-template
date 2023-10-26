import type { Meta, StoryObj } from "@storybook/react";
import Light from "src/screens/Light";

const meta: Meta<typeof Light> = {
    component: Light,
    title: "Light",
    tags: ["autodocs"],
    // argTypes: {
    //     variant: { defaultValue: "red" },
    //      text: { defaultValue: "test",  },
    // },
};

export default meta;

type Story = StoryObj<typeof Light>;

export const Base: Story = {
    args: { text: "test", variant: "yellow" },
};
export const Blue: Story = {
    args: { text: "test", variant: "blue" },
};
export const Red: Story = {
    args: { text: "test", variant: "red" },
};
