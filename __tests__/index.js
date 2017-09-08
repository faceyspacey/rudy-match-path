import matchPath, { compilePath, compileParamsToPath } from '../src'

test('regular match', () => {
  const isMatch = matchPath('/foo/bar', { path: '/foo/bar' })
  expect(isMatch).toBeTruthy()
})

test('exact match', () => {
  const isMatch = matchPath('/foo/bar', { path: '/foo', exact: true })
  expect(isMatch).toBeFalsy()
})

test('strict match', () => {
  const isMatch = matchPath('/foo', { path: '/foo/', strict: true })
  expect(isMatch).toBeFalsy()
})

test('match with params', () => {
  const match = matchPath('/foo/bar/1', { path: '/foo/:bar/:baz' })
  expect(match).toMatchSnapshot() /*? match */
})

// TODO: add tests for advanced route paths

test('compilePath', () => {
  const { re, keys } = compilePath('/foo/:bar')
  expect(re.exec('/foo/blabla')).toMatchSnapshot()
  expect(keys).toMatchSnapshot()
})

test('compileParamsToPath', () => {
  let path = compileParamsToPath('/foo/:bar', { bar: 'blabla' })
  expect(path).toEqual('/foo/blabla')

  // will use cached toPath function instead
  path = compileParamsToPath('/foo/:bar', { bar: 'blabla' })
  expect(path).toEqual('/foo/blabla')
})
