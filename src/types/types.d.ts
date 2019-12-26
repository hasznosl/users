interface IUserType {
  email: string,
  name: {
    first: string,
    last: string
  },
  login: {
    username: string
  },
  picture: {
    thumbnail: string
  },
  location: {
    street: string
  }

}