import React from 'react';
import { render } from "react-dom";
import  CanvasApp from './threeCanvas';

const app = ()=>{
  return(
    <>
      <CanvasApp />
    </>
  );
};

render(
  app(),
  document.getElementById('sample')
);
