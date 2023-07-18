import ReactDOM from './react-dom';

let value;

function useState(initialValue) {
  value = value ?? initialValue;

  function setValue(newValue) {
    value = newValue;
    ReactDOM.root.render();
  }

  return [value, setValue];
}

function createElement(type, props, ...children) {
  const el = document.createElement(type);

  for (let [key, value] of Object.entries(props)) {
    if (key === 'className') el.setAttribute('class', value);
    if (key === 'onClick') el.addEventListener('click', value);
    else el.setAttribute(key, value);
  }

  children.forEach((child) => {
    if (typeof child === 'string')
      el.appendChild(document.createTextNode(child));
    else el.appendChild(child);
  });

  return el;
}

export { useState, createElement };
