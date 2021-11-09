import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

// IntrinsicAttributes は React の DOM における属性を表す。
type Foo = JSX.IntrinsicAttributes; // interface IntrinsicAttributes extends React.Attributes { }

// appコンポーネントにmessageを渡す場合
ReactDOM.render(
    <App message="Hello, React!"/>,
    document.getElementById('root')
);
