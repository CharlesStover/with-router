# with-router [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Want%20to%20use%20react-router%20with%20Hooks?%20Now%20you%20can%20with%20use-react-router!&url=https://github.com/CharlesStover/use-react-router&via=CharlesStover&hashtags=react,reactjs,javascript,webdev,webdeveloper,webdevelopment)

A pub-sub alternative HOC to `react-router`'s `withRouter` HOC. It functions exactly the same way, except the wrapped component will re-render when the route changes. This is beneficial if your view changes depending on the current path.

A tutorial covering the design and development of this package can be found on Medium: [How to Convert withRouter to a React Hook](https://medium.com/@Charles_Stover/how-to-convert-withrouter-to-a-react-hook-19bb02a29ed6).

[![version](https://img.shields.io/npm/v/use-react-router.svg)](https://www.npmjs.com/package/use-react-router/)
[![build](https://api.travis-ci.com/CharlesStover/use-react-router.svg)](https://travis-ci.com/CharlesStover/use-react-router/)
[![downloads](https://img.shields.io/npm/dt/use-react-router.svg)](https://www.npmjs.com/package/use-react-router)
[![minified size](https://img.shields.io/bundlephobia/min/use-react-router.svg)](https://www.npmjs.com/package/use-react-router)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/use-react-router.svg)](https://www.npmjs.com/package/use-react-router)

## Install

* `npm install with-router --save` or
* `yarn add with-router`

## Example

```JavaScript
import useReactRouter from 'use-react-router';

function MyComponent(props) {
  const { history, location, match } = useReactRouter(props);
  return <div>Text</div>;
}
```
