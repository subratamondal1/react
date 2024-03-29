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

Building components with React is a fundamental aspect of creating user interfaces for web applications. Components are **Reusable UI** building blocks

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

Here, depending on the value of `items.length`, the message will be displayed by the function `displayMessage()`.

### Handling Events

Handling events is a crucial aspect of creating interactive UIs in React.

**Event Handlers:**

- React events are named in camelCase (e.g., `onClick`, `onMouseOver`).
- You define event handlers as functions passed as props to elements.
- The event handler function typically receives an event object (`event`) as an argument, containing information about the event.

**Common Event Handlers:**

- `onClick`: Triggered when an element is clicked.
- `onChange`: Triggered when the value of an input element changes (e.g., typing in a text box).
- `onSubmit`: Triggered when a form is submitted.
- `onMouseOver` and `onMouseOut`: Triggered when the mouse enters or leaves an element.

```jsx
<button onClick={() => console.log("Clicked")}></button>
```

### Managing State using Hooks

- Hooks are functions that let you "hook into" state and other React features from functional components.
- They start with the name `use`, followed by a descriptive name (e.g., `useState`, `useEffect`).
- You cannot use hooks inside loops, conditions, or nested functions. They must be called at the top level of your functional component.

**Managing State using useState Hook:**

The `useState` hook is one of the most essential hooks for managing state in functional components. Here's how it works:

**Syntax:** `const [state, setState] = useState(initialState);`

- `state`: The current state value (can be a number, string, object, etc.).
- `setState`: A function used to update the state value.
- `initialState`: The initial value of the state (optional).

**Example:**

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```

- The `count` variable holds the current state value, initially set to 0.
- The `setCount` function is used to update the state value.
- Clicking the button triggers the `handleClick` function, which increments the count and updates the state using `setCount`.

### Passing Data via `Props`

Passing data between components in React is crucial for building dynamic and interactive applications. The preferred way to achieve this is by using **props**, which act as communication channels between parent and child components.

**1. Passing `Props` from Parent to Child:**

- **Syntax:**
  ```jsx
  <ChildComponent
    propName="value"
    anotherProp={someObject}
  />
  ```
- The data you want to pass is specified as `key-value` pairs within the parent component's JSX tag.
- The keys (`propName`, `anotherProp`) become props accessible within the child component.

**2. Receiving Props in the Child Component:**

- **Syntax:**
  ```jsx
  function ChildComponent({ propName, anotherProp }) {
    // Access prop values using destructuring
    return (
      <div>
        {/* Use prop values here: */}
        <p>Received prop: {propName}</p>
      </div>
    );
  }
  ```
- The child component receives props as an object named `props` by default.
- Destructuring within the function arguments allows you to access individual props directly.

```jsx
// ParentComponent
import ListGroup from "./components/ListGroup";
function App() {
  const items = ["Kolkata", "Mumbai", "Bangalore", "Pune"];
  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"></ListGroup>
    </>
  );
}

export default App;
```

```jsx
// ChildComponent
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1 className="text-5xl text-center">{heading}</h1>
      <ul className="m-8 space-y-8 rounded-lg border-2 border-fuchsia-600 p-8">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              console.log(selectedIndex);
            }}
            className="border-b-2 p-2 text-xl font-bold active:bg-red-300">
            {item.toUpperCase()}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
```

### Passing Function via `Props`

Passing functions as props in React allows you to send functionality down from parent components to their child components. This enables dynamic behavior and communication between different parts of your application.

```jsx
// ParentComponent
import ListGroup from "./components/ListGroup";
function App() {
  const items = ["Kolkata", "Mumbai", "Bangalore", "Pune"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}></ListGroup>
    </>
  );
}

export default App;
```

```jsx
// ChildComponent
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1 className="text-5xl text-center">{heading}</h1>
      <ul className="m-8 space-y-8 rounded-lg border-2 border-fuchsia-600 p-8">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              console.log(selectedIndex);
              onSelectItem(item);
            }}
            className="border-b-2 p-2 text-xl font-bold active:bg-red-300">
            {item.toUpperCase()}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
```

### Props vs State

| Feature        | Props                                                                                                                                                                | State                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Definition** | Data passed down from parent to child components                                                                                                                     | Data managed within a component                                                                      |
| **Context**    | Similar to function arguments                                                                                                                                        | Similar to local variables                                                                           |
| **Mutability** | `Read-only` by child components                                                                                                                                      | `Mutable` within the component                                                                       |
| **Scope**      | Shared across components that receive the same prop                                                                                                                  | Specific to the component managing the state                                                         |
| **Lifetime**   | Defined once and passed down during render                                                                                                                           | Can change over time based on user interactions or other events                                      |
| **Purpose**    | Configure component behavior based on external data                                                                                                                  | Manage dynamic data and behavior within a component                                                  |
| **Use cases**  | Displaying dynamic content based on parent data, triggering actions in parent based on child interactions, sharing reusable UI components with configurable behavior | Maintaining user input, handling conditional rendering based on internal data, managing side effects |
| **Examples**   | Passing item data to a list component, passing a callback function to handle form submission                                                                         | Tracking selected item index in a list, managing form validation errors                              |

### Passing Children

Children are elements nested within a component's JSX tag. They become a special prop named `children` accessible within the component. Passing children allows for flexible component usage and composition.

```jsx
// ParentComponent
import Alert from "./components/Alert";
function App() {
  return (
    <div>
      <Alert>
        <p>Subrata Mondal</p>
      </Alert>
    </div>
  );
}

export default App;
```

In the above notice that our custom component `<Alert></Alert>` is having children inside itself `<p></p>`, which is created via the below code:

```jsx
// ChildComponent
import type { ReactNode } from "react";

interface Props {
  // Special Name `children`
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <div className="m-8 p-8 border-2 bg-orange-200 rounded-lg text-2xl font-bold">
      {children}
    </div>
  );
};

export default Alert;
```

Note that **`ReactNode`** allows to html elements inside our jsx components.

### Adding Icons

To use icons first install this libraray:

```bash
npm i react-icons@latest
```

```jsx
import { BsFillCalendarFill } from "react-icons/bs";
function App() {
  return (
    <>
      <BsFillCalendarFill
        color="orange"
        size={50}></BsFillCalendarFill>
    </>
  );
}

export default App;
```

## `Managing State Component`

- The `state hook` allows us to add state to function components.
- Hooks can only be called at the top level of components.
- State variables, unlike local variables in a function, stay in memory as long as the component is visible on the screen. This is because state is tied to the component instance, and React will destroy the component and its state when it is removed from the screen.
- React updates state in an `asynchronous` manner, so updates are not applied immediately. Instead, they’re batched and applied at once after all event handlers have finished execution. Once the state is updated, React re-renders our component.
- Group related state variables into an object to keep them organized.
- Avoid deeply nested state objects as they can be hard to update and maintain.
- To keep state as minimal as possible, avoid redundant state variables that can be computed from existing variables.
- A `pure function` is one that always returns the same result given the same input. Pure functions should not modify objects outside of the function.

- React expects our function components to be pure. A pure component should always return the same JSX given the same input.
- To keep our components pure, we should avoid making changes during the render phase.

- Strict mode helps us catch potential problems such as impure components. Starting from React 18, it is enabled by default. It renders our components twice in development mode to detect any potential side effects.

- When updating objects or arrays, we should treat them as immutable objects. Instead of mutating them, we should create new objects or arrays to update the state.

- `Immer` is a library that can help us update objects and arrays in a more concise and mutable way.

- To share state between components, we should lift the state up to the closest parent component and pass it down as props to child components.

- The component that holds some state should be the one that updates it. If a child component needs to update some state, it should notify the parent component using a callback function passed down as a prop.

## `Building Forms`

### Terms

- **React Hook Form**
- **Ref hook**
- **Schema-based validation libraries**
- **Zod**

### Summary

- To handle form submissions, we set the `onSubmit` attribute of the `form` element.
- We can use the `ref hook` to access elements in the DOM. This technique is often used to read the value of input fields upon submitting a form.
- We can also use the `state hook` to create state variables and update them as the user types into input fields. With this technique, every time the user types a character into an `input field`, the component containing the form gets re-rendered. While in theory this can cause a performance penalty, in practice this is often negligible.
- `React Hook Form` is a popular library that helps us build forms quickly with less code.
- With React Hook Form, we no longer have to worry about using the ref or state hooks to manage the form state.
- React Hook Form supports the standard HTML attributes for data validation such as `required, minLength`, etc.
- We can validate our forms using schema-based validation libraries such as `joi, yup, zod`, etc. With these libraries, we can define all our validation rules in a single place called a `schema`.
