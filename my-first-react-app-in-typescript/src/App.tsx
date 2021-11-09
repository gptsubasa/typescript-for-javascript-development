import React from 'react';

interface AppProps {
  message?: string;
  description?: string;
}

// const App = (props: any) => {
//   const { message } = props;  // JavaScriptの分割代入

// 67. Function Components 入門編
// const App = ({ message }: AppProps) => {
//   return <div>{message}</div>;
// };

// 68. Function Components 初級編
const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return <div>{message}</div>;
};
App.defaultProps = {
  message: 'Hello, defaultProps!',
  description: 'This is App component.',
};

export default App;
