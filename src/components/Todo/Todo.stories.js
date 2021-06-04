import React from 'react';

import Todo from './Todo';

export default {
  component: Todo,
  title: 'Todo',
};

const Template = args => <Todo {...args} />;

export const Default = Template.bind({});
Default.args = {
  todo: {
    id: new Date(2021, 0, 1, 9, 0),
    name: 'Test Todo',
    completed: false,
  },
};

export const Undone = Template.bind({});
Undone.args = {
  todo: {
    ...Default.args.todo,
    completed: false,
  },
};

export const Done = Template.bind({});
Done.args = {
  todo: {
    ...Default.args.todo,
    completed: true,
  },
};
