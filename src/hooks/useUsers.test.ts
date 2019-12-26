import { renderHook } from '@testing-library/react-hooks'
import useUsers from './useUsers'



test('should give some users', () => {
  const { result } = renderHook(() => useUsers({ nationalities: ['foo', 'bar'] }))

  expect(result.current.users).toHaveLength(0)

})