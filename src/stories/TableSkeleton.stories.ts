import type { Meta, StoryObj } from '@storybook/react';
import TableSkeleton from '../components/UI/TableSkeleton';

const meta = {
  title: 'Components/TableSkeleton',
  component: TableSkeleton,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    columnCount: {
      control: {
        type: 'number',
        min: 1,
        max: 16,
        step: 1,
      },
    },
    rowCount: {
      control: { type: 'number', min: 1, max: 20, step: 1 },
      required: true,
    },
  },
} satisfies Meta<typeof TableSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columnCount: 2,
    rowCount: 5,
  },
};

export const MoreColumns: Story = {
  args: {
    columnCount: 5,
    rowCount: 6,
  },
};

export const ManyColumns: Story = {
  args: {
    columnCount: 10,
    rowCount: 8,
  },
};
