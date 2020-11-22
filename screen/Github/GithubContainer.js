import React from "react";
import GithubPresenter from "./GithubPresenter";

export default ({ navigation, route }) => {
  const githubLink = "https://github.com/sweethoneybee/attendance";
  return <GithubPresenter githubLink={githubLink} />;
};
