import { createElement, useState } from './react';

function App() {
  return createElement(
    'div',
    {},
    createElement('h1', {}, 'My Own React App'),
    Counter()
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return createElement(
    'div',
    {},
    createElement('p', {}, `Count: ${count}`),
    createElement('button', { onClick: () => setCount(count + 1) }, 'Increment')
  );
}

export default App;
