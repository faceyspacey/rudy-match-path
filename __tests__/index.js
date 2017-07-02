import matchPath from '../src'

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
