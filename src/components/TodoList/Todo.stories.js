import React from 'react';

import TodoList from './TodoList';

export default {
  component: TodoList,
  title: 'TodoList',
};

const Template = args => <TodoList {...args} />;

export const Default = Template.bind({});
Default.args = {
  todos: []

};

/* export const Undone = Template.bind({});
Undone.args = {
  todo: {
    ...Default.args.todo,
    completed: false,
  },
}; */
