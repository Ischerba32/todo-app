import React from "react";

import ToDo from './containers/todo/todo';
import Title from './components/Title/title';

const App = () => {
  return (
    <>
      <Title title="ToDo app" />
      <ToDo />
    </>
  )
}

export default App;