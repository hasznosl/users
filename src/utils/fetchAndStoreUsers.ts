
import axios from 'axios'
import nationalitiesToQueryString from './nationalitiesToQueryString'

export const maxCatalogueSize = 1000
const NEXT_BATCH_SIZE = 50

const randomUsersUrl = (page: number, nationalities: string[]) =>
  `https://randomuser.me/api/?page=${page}
  &results=${NEXT_BATCH_SIZE}
  &seed=jggjghjkgj${nationalitiesToQueryString(nationalities)}`

/**
 * 
 * @param param0: 
 * page: page number of users to be fetched
 * shouldAppend: if true then the fetched users will be appended to the so far fetched ones, if not, then replaced
 * users: the so far fetched users
 * nationalities: list of nationalities that shuold be fetched
 * setUsers: hook to set the so far fetched users
 * setIsLoading: hook to set the isLoading value
 *
 */

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