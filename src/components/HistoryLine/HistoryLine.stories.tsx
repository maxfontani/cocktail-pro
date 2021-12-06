import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import HistoryLine from "./HistoryLine";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "HistoryLine",
  component: HistoryLine,
} as ComponentMeta<typeof HistoryLine>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof HistoryLine> = (args) => (
  <HistoryLine {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  date: new Date().toString(),
  search: "island",
  url: "www.site?s=island",
};
