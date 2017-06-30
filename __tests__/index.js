import matchPath from '../src'

test('matchPath basic smokescreen test', () => {
  const isMatch = matchPath('/foo/bar', { path: '/foo/bar' })
  expect(isMatch).toBeTruthy()
})

test('EXACT: matchPath basic smokescreen test', () => {
  const isMatch = matchPath('/foo/bar', { path: '/foo', exact: true })
  expect(isMatch).toBeFalsy()
})
