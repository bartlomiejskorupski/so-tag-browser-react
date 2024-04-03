import type { Meta, StoryObj } from '@storybook/react';
import CustomTable from '../components/UI/CustomTable';

const meta = {
  title: 'Components/CustomTable',
  component: CustomTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof CustomTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleTagTable: Story = {
  args: {
    data: [
      { name: 'javascript', count: 1372 },
      { name: 'asp.net', count: 879 },
      { name: 'python', count: 9843 },
      { name: 'typescript', count: 837 },
      { name: 'c#', count: 325 },
      { name: 'c++', count: 654 },
      { name: 'android', count: 142 },
      { name: 'css', count: 123 },
    ],
    columnDefinitions: {
      name: { label: 'Name', className: 'font-bold text-sky-800' },
      count: {
        label: 'Related Posts',
        numeric: true,
        className: 'text-stone-400',
      },
    },
    idColumn: 'name',
    rowsPerPage: 4,
  },
};

export const EmployeeTable: Story = {
  args: {
    data: [
      { id: 'E1', fullName: 'John Doe', age: 47, email: 'jdoe@example.com' },
      {
        id: 'E2',
        fullName: 'Jacob Miller',
        age: 38,
        email: 'jmil@example.com',
      },
      {
        id: 'E3',
        fullName: 'Charles Smith',
        age: 23,
        email: 'csmith@example.com',
      },
      {
        id: 'E4',
        fullName: 'Terry Testington',
        age: 52,
        email: 'test@example.com',
      },
      {
        id: 'E5',
        fullName: 'Garry Chess',
        age: 60,
        email: 'garrychess@example.com',
      },
      { id: 'E6', fullName: 'John Doe Jr', age: 19, email: 'jdoe@example.com' },
      {
        id: 'E7',
        fullName: 'Jacob Miller Jr',
        age: 18,
        email: 'jmjr@example.com',
      },
      {
        id: 'E8',
        fullName: 'Charles Smith Jr',
        age: 23,
        email: 'charlesjr@example.com',
      },
      {
        id: 'E9',
        fullName: 'Terry Testington Jr',
        age: 28,
        email: 'testjr@example.com',
      },
      {
        id: 'E10',
        fullName: 'Garry Chess Jr',
        age: 38,
        email: 'gchess@example.com',
      },
    ],
    columnDefinitions: {
      id: {
        label: 'ID',
        className: 'font-bold text-stone-50 bg-stone-600 rounded-xl p-1',
      },
      fullName: {
        label: 'Full Name',
        className: 'text-sky-900',
      },
      age: {
        label: 'Age',
        className: '',
        numeric: true,
      },
      email: {
        label: 'E-Mail',
        className: 'text-sky-500 underline',
      },
    },
    idColumn: 'id',
    rowsPerPage: 4,
  },
};
