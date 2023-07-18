import { createElement, useState } from './react';

function App() {
  return createElement(
    'div',
    { className: 'app' },
    createElement('h1', { className: 'app-title' }, 'My Own React'),
    Counter()
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return createElement(
    'div',
    { className: 'counter' },
    createElement('p', { className: 'counter-value' }, `Count: ${count}`),
    createElement(
      'button',
      { className: 'counter-button', onClick: () => setCount(count + 1) },
      'Increment'
    )
  );
}

export default App;
