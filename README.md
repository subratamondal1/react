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

