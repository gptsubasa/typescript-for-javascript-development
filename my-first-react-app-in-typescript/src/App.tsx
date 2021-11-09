import React from 'react';

interface AppProps {
  message: string;
}

// const App = (props: any) => {
//   const { message } = props;  // JavaScriptの分割代入
const App = ({ message }: AppProps) => {
  return <div>{message}</div>;
};

export default App;
