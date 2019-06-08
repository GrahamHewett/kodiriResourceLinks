import React from "react";
import "./index.css";

import ReactLinks from "./sections/ReactLinks";
import JavaScript from "./sections/JavaScript";
import CSS from "./sections/CSS";
import Git from "./sections/Git";
import Testing from "./sections/Testing";
import Deployment from "./sections/Deployment";
import AllWeeks from "./weeks/AllWeeks";
import VSCode from "./sections/VSCode"

export default () => (
  <>
    <JavaScript/>
    <ReactLinks/>
    <CSS />
    <Git />
    <Testing />
    <Deployment />
    <AllWeeks />
    <VSCode/>
  </>
);