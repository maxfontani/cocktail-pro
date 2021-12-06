import React from "react";
import { ComponentMeta, storiesOf } from "@storybook/react";
import { createMemoryHistory } from "history";
import { Router, Route } from "react-router-dom";

import Logo from "./Logo";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

export const Primary = () => <Logo />;
