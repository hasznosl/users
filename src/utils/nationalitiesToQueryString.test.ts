import nationalitiesToQueryString from './nationalitiesToQueryString'

describe('nationalitiesToQueryString', () => {
  it('should return the expected query string when only one nationality', () => {
    const nationalities = ['foo']
    expect(nationalitiesToQueryString(
      nationalities
    )).toBe('&nat=foo')
  })
  it('should return the expected query string when two nationality', () => {
    const nationalities = ['foo', 'bar']
    expect(nationalitiesToQueryString(
      nationalities
    )).toBe('&nat=foo,bar')
  })
  it('should return the expected query string when three nationality', () => {
    const nationalities = ['foo', 'bar', 'baz']
    expect(nationalitiesToQueryString(
      nationalities
    )).toBe('&nat=foo,bar,baz')
  })
  it('should return the expected query string when zero nationality', () => {
    const nationalities: string[] = []
    expect(nationalitiesToQueryString(
      nationalities
    )).toBe('')
  })
})