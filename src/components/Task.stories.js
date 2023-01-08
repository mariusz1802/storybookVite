import React from "react";

import Task from "./Task";

//storybook.js.org/tutorials/intro-to-storybook/react/en/simple-component/

https: export default {
  component: Task,
  title: "Task",
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});

Default.args = {
  task: {
    id: "1",
    title: "Test task",
    state: "TASK INBOX",
  },
};
