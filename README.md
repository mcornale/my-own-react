# My Own React

This project is my own implementation of the React library (very very simplified). It just allows you to create a root, render the app, and use a single state with the useState hook.
For simplicity, the render method deletes all the dom nodes in the root and it regenerates them.

## Features

- Create a root (`ReactDOM.createRoot(domNode)`)
- Render inside the root (`root.render(element)`)
- Create a single state (`useState(initialValue)`)

## How to run the project

- Clone the repository or download the source code.
- Open a terminal and navigate to the project directory.
- Run the following command to install the dependencies: `npm install`
- Run the project with: `npm run dev`. This command will start the development server and make your app available at http://localhost:5173/

```plaintext
This project has been developed with Node v18.16.1
