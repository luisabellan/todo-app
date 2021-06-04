import React from 'react';

import TodoForm from './TodoForm';

export default {
  component: TodoForm,
  title: 'TodoForm',
};

const Template = args => <TodoForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  todoItem1: ''
};

export const Undone = Template.bind({});
Undone.args = {
  todo: {
    ...Default.args.todo,
    completed: false,
  },
};


