import React, { useReducer } from "react";
import ResumeContext from "./resumeContext";
import resumeReducer from "./resumeReducer";
import resume from "../../assets/json/resume.json";

import { GET_RESUME_DATA } from "../types";

const ResumeState = props => {
  const initialState = {
    resume: null
  };

  const [state, dispatch] = useReducer(resumeReducer, initialState);

  // get resume
  const getResumeData = () => {
    dispatch({ type: GET_RESUME_DATA, payload: resume });
  };

  return (
    <ResumeContext.Provider
      value={{
        resume: state.resume,
        getResumeData
      }}
    >
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeState;
