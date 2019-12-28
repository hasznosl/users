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
    street: { name: string }
    city: string,
    state: string,
    postcode: string,
  },
  phone: string,
  cell: string
}

interface IRandomUsersResponseType {

  data:
  {
    results: IUserType[]
  }

}