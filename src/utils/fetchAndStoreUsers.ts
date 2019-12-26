
import axios from 'axios'
import nationalitiesToQueryString from './nationalitiesToQueryString'

export const maxCatalogueSize = 1000
const NEXT_BATCH_SIZE = 50

const randomUsersUrl = (page: number, nationalities: string[]) =>
  `https://randomuser.me/api/?page=${page}
  &results=${NEXT_BATCH_SIZE}
  &seed=jggjghjkgj${nationalitiesToQueryString(nationalities)}`

const fetchAndStoreUsers = async ({
  page,
  shouldAppend,
  users,
  nationalities,
  setUsers,
  setIsLoading
}: {
  page: number
  shouldAppend: boolean
  users: IUserType[]
  nationalities: string[]
  setUsers: (users: IUserType[]) => void
  setIsLoading: (loading: boolean) => void
}) => {
  if (users.length >= maxCatalogueSize) {
    return null
  }
  setIsLoading(true)
  const response = await axios.get(randomUsersUrl(page, nationalities)) as IRandomUsersResponseType
  setIsLoading(false)
  setUsers(shouldAppend ? [...users, ...response.data.results] : response.data.results)
}

export default fetchAndStoreUsers