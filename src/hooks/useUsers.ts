import { useState, useEffect } from "react";
import nationalitiesToQueryString from '../utils/nationalitiesToQueryString'
import axios from 'axios'
import debounce from 'lodash/debounce'

const maxCatalogueSize = 1000
const NEXT_BATCH_SIZE = 50

const useUsers = ({ nationalities }: { nationalities: string[] }) => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)

  const fetchAndStoreUsers = async ({ page, shouldAppend }: { page: number, shouldAppend: boolean }) => {
    if (users.length >= maxCatalogueSize) {
      return null
    }
    const response = await axios.get(`https://randomuser.me/api/?page=${page}
    &results=${NEXT_BATCH_SIZE}
    &seed=jggjghjkgj${
      nationalitiesToQueryString(nationalities)}`) as any
    setIsLoading(false)
    const newUsers = shouldAppend ? [...users, ...response.data.results] : response.data.results
    setUsers(newUsers)
  }

  window.onscroll = debounce(() => {
    // todo this 0.9 can be improved
    if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight * 0.9) {
      fetchAndStoreUsers({ page: page + 1, shouldAppend: true })
      setPage(page + 1)
    }
  }, 50)

  useEffect(() => {
    fetchAndStoreUsers({ page: 1, shouldAppend: false })
    setPage(1)
  }, [nationalities])

  return {
    users, setUsers, isLoading, maxCatalogueSize
  }
}

export default useUsers