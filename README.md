<h1 align="center">React</h1>

<p align="center">
  <img src="https://skillicons.dev/icons?i=typescript,react,tailwind,nodejs,vite,html,css,docker,aws,mysql,postman,git,github,vscode&perline=" />
</p>

## `Create React App with Vite`

```bash
1. npm create vite@latest
```

On executing this command from terminal, you get to select few options like which Framework + Language you want to use, I am using **`React + Typescript`**.

```bash
# output
npm create vite@latest
✔ Project name: … react-app
✔ Select a framework: › React
✔ Select a variant: › TypeScript

Scaffolding project in /Users/subratamondal/Workspace/web development/react/react-app...

Done. Now run:

  cd react-app
  npm install
  npm run dev
```

Now execute this command one by one two run your app:

```bash
2. cd react-app
3. npm install
4. npm run dev
```

```bash
# output

  VITE v5.1.3  ready in 743 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Go to the local host to see your app up and running: `Vite + React Logo with a Counter`.

## `Folder structure created by Vite`

```bash
react-app
├── README.md
├── index.html # APP's Entry Point and contains the Container of our APP (#root)
├── package-lock.json
├── package.json # Information of our project
├── node_modules # all the 3rd party libraries like react are installed here
│   └── ...
├── public # contains all the public assets like images, logos
│   └── vite.svg
├── src # source code of our APP
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

Whenever there is a change in your app, vite automatically updates the changes via **hmr** means `hot reload module`.

```bash
[vite] hmr update /src/App.tsx (x12)
```

## `Building Components with React`

Building components with React is a fundamental aspect of creating user interfaces for web applications.

- Components are **Reusable UI** building blocks

### How to build components

- **Function or class components:** You can define components using either functions or classes. Function components are simpler and recommended for most use cases, while class components offer lifecycle methods for more complex scenarios.

- **JSX (Javascript XML):** Instead of writing HTML directly, React uses JSX syntax, which looks like HTML but integrates JavaScript expressions for dynamic content and interactivity.

- **Props and state:** Components receive data from their parent components through props, and manage their internal data using state. By controlling props and state, components react to changes and update their UI accordingly.

### Fragments (`<> </>`) in React

Fragments in React offer a way to group a list of children elements without adding any extra nodes to the DOM using this syntax `<> Elements </>`

```javascript
<>
  <h1 className="text-5xl text-center">List</h1>
  <ListGroup></ListGroup>
</>
```

### Rendering List with `Dynamic` Data via `.map`

In JSX, you cannot directly use `for loops` to dynamically render elements from an array. This is because JSX is a syntactic sugar for JavaScript, and for loops are not valid expressions within JSX. Instead, React provides the `.map` method as a powerful tool for iterating over arrays and generating corresponding JSX elements.

```javascript
function ListGroup() {
  const items = ["Kolkata", "Mumbai", "Bangalore", "Pune"];
  return (
    <ul className="m-8 space-y-8 rounded-lg border-2 border-fuchsia-600 p-8">
      {items.map((item) => (
        <li
          key={item}
          className="border-b-2 p-2 text-xl font-bold">
          {item.toUpperCase()}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
```

### Conditional Rendering

Conditional rendering is a fundamental concept in React that allows you to dynamically display different UI elements based on specific conditions.

**1. Using `if` statements:**

This is the most basic approach, where you wrap the element you want to conditionally render within an `if` statement:

```jsx
const isLoggedIn = true;

return <div>{isLoggedIn && <p>Welcome back!</p>}</div>;
```

In this example, the `<p>` element will only be rendered if the `isLoggedIn` variable is true.

**2. Using the Ternary Operator:**

The ternary operator provides a concise way for conditional rendering within JSX:

```jsx
const isLoading = true;

return <div>{isLoading ? <p>Loading...</p> : <p>Content is ready!</p>}</div>;
```

Here, depending on the value of `isLoading`, either the "Loading..." text or the "Content is ready!" message will be displayed.

**3. Using Function**

```jsx
function ListGroup() {
  const items = ["Kolkata", "Mumbai", "Bangalore", "Pune"];
  function displayMessage() {
    return <p>Another Message of Items not found but via Function</p>;
  }
  return (
    <>
      {items.length === 0 && <p>Items not found</p>}
      {items.length === 0 && displayMessage()}
      <ul className="m-8 space-y-8 rounded-lg border-2 border-fuchsia-600 p-8">
        {items.map((item) => (
          <li
            key={item}
            className="border-b-2 p-2 text-xl font-bold">
            {item.toUpperCase()}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
```
