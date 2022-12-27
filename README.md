# NextJS Typescript MaterialUI Boilerplate

This is a Saas frontend boilerplate with the following features:

- [NextJS](https://nextjs.org/),
- [Typescript](https://www.typescriptlang.org/),
- [Material UI](https://mui.com/),
- [ESLint](https://eslint.org/),
- [Prettier](https://prettier.io/docs/en/install.html),
- [Husky](https://typicode.github.io/husky/#/),
- [Commit Lint](https://commitlint.js.org/)
- [Jest](https://jestjs.io/docs/tutorial-react)
- [Enzyme](https://rjzaworski.com/2018/03/testing-with-typescript-react-and-enzyme)

## Requirements

- [Node.js](https://nodejs.org/en/)
- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Getting Started

Run the following command on your local enviornment:

```shell
git clone --depth=1 https://github.com/asolace/nextjs-typescript-materialui-boilerplate.git my-project-name

cd my-project-name

npm install
```

## Testing

Using Jest + Enzyme to test.

Commands:

- Test: `npm test`
- Coverage `npm run coverage`

#### Coverage

To change coverage threshold go to the `jest.config.js` file and look for `coverageThreshold`.

If you're getting any one of these errors:

```shell
Jest: "global" coverage threshold for statements (100%) not met: 87.14%
Jest: "global" coverage threshold for lines (100%) not met: 88.09%
Jest: "global" coverage threshold for functions (100%) not met: 71.79%
```

To add ignore coverage patters go to the `jest.config.js` file and look for `collectCoverageFrom` array. Use the `!` to ignore files.

## License

Licensed under the MIT License, Copyright © 2022

---

Made with ♥ by [Asolace](https://asolace.me) | Jack He
