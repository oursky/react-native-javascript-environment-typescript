# react-native-javascript-environment-typescript

**WITHOUT** using [@babel/runtime](https://babeljs.io/docs/en/babel-runtime)

**WITHOUT** using [@babel/runtime](https://babeljs.io/docs/en/babel-runtime)

**WITHOUT** using [@babel/runtime](https://babeljs.io/docs/en/babel-runtime)

The JavaScript environment running
your code is not a fully ES2015 environment but specified in [JavaScript Environment](https://facebook.github.io/react-native/docs/javascript-environment#polyfills).

Even the documentation does not tell you Map and Set are polyfilled.

The exact applied polyfill are

1. https://github.com/facebook/react-native/blob/v0.57.7/Libraries/Core/InitializeCore.js#L41
1. https://github.com/facebook/react-native/tree/v0.57.7/Libraries/polyfills

Therefore, if you configure `--lib` to include `ES2015` or even higher **AND** do not use [@babel/runtime](https://babeljs.io/docs/en/babel-runtime),
you are lying to yourself that you can use all ES2015+ runtime features.

The type definition is valid for React Native >= 0.57.

The type definition itself is copied from [TypeScript repository](https://github.com/Microsoft/TypeScript/tree/master/lib).

# Usage

1. In `tsconfig.json`, set `lib` to `["ES5", "ES2015.Promise", "ES2015.Collection", "ES2016.Array.Include"]`.
1. In `tsconfig.json`, add `"./node_modules/@oursky/react-native-javascript-environment-typescript/index.d.ts"` to "files".
