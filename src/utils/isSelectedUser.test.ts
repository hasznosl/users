import isSelectedUser from './isSelectedUser'

describe('isSelectedUser', () => {
  it('should return true, when the email and username of the users are the same', () => {
    // there is no userId coming bak from the api, so this is currently an OK way off differentiating users
    const user1 = {
      email: 'foo',
      login: {
        username: 'bar'
      }
    }
    const user2 = {
      email: 'foo',
      login: {
        username: 'bar'
      }
    }
    expect(isSelectedUser(user1, user2)).toBeTruthy()
  })
  it('should return false, when the email of the users are NOT the same', () => {
    const user1 = {
      email: 'foo',
      login: {
        username: 'bar'
      }
    }
    const user2 = {
      email: 'baz',
      login: {
        username: 'bar'
      }
    }
    expect(isSelectedUser(user1, user2)).toBeFalsy()
  })
  it('should return false, when the username of the users are NOT the same', () => {
    const user1 = {
      email: 'foo',
      login: {
        username: 'bar'
      }
    }
    const user2 = {
      email: 'foo',
      login: {
        username: 'baz'
      }
    }
    expect(isSelectedUser(user1, user2)).toBeFalsy()
  })
})