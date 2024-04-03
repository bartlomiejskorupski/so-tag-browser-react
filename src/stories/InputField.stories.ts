import type { Meta, StoryObj } from '@storybook/react';
import InputField from '../components/UI/InputField';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['text', 'number', 'password', 'email', 'tel'],
    },
  },
  args: { onApply: fn() },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumericPositiveOnly: Story = {
  args: {
    label: 'Numeric Field',
    initialValue: '10',
    type: 'number',
    disabledCondition: (value) => +value <= 0,
  },
};

export const EmptyText: Story = {
  args: { label: 'Text Field' },
};

export const TextWithInitial: Story = {
  args: { label: 'Text Field', initialValue: 'Some initial text' },
};
