// import React from 'react';


export const buildOptions = (optionsArr, id, desc) => {
  return optionsArr.map((option) => ({
    key: option[id],
    text: option[desc]
  }));
};