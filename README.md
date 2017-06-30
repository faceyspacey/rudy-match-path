## `rudy-match-path`

This is the `matchPath` function borrowed from *React Router* for general purpose use. It's used by [Rudy](https://github.com/faceyspacey/rudy) and its [`<Link />` package](https://github.com/faceyspacey/rudy-link).

## Installation

```
yarn add rudy-match-path
```

## Usage

```js
import matchPath from 'rudy-match-path'

const { pathname } = window.location // '/foo/bar'
const isMatch = matchPath(pathname, { path: '/foo', exact: true, strict: false })

<a className={isMatch && 'active'}>Foo</a>
```
