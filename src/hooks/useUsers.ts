import { useState, useEffect } from "react";
import nationalitiesToQueryString from '../utils/nationalitiesToQueryString'
import axios from 'axios'
import debounce from 'lodash/debounce'

export const maxCatalogueSize = 1000
const NEXT_BATCH_SIZE = 50
const randomUsersUrl = (page: number, nationalities: string[]) => `https://randomuser.me/api/?page=${page}&results=${NEXT_BATCH_SIZE}&seed=jggjghjkgj${nationalitiesToQueryString(nationalities)}`

const useUsers = ({ nationalities }: { nationalities: string[] }) => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const fetchAndStoreUsers = async ({ page, shouldAppend }: { page: number, shouldAppend: boolean }) => {
    if (users.length >= maxCatalogueSize) {
      return null
    }
    setIsLoading(true)
    const response = await axios.get(randomUsersUrl(page, nationalities)) as any
    setIsLoading(false)
    const newUsers = shouldAppend ? [...users, ...response.data.results] : response.data.results
    setUsers(newUsers)
  }

  const handleScroll = debounce(() => {
    if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight * 0.9) {
      fetchAndStoreUsers({ page: page + 1, shouldAppend: true })
      setPage(page + 1)
    }
  }, 50)

  window.onscroll = handleScroll

  useEffect(() => {
    fetchAndStoreUsers({ page: 1, shouldAppend: false })
    setPage(1)

    return () => {
      window.onscroll = null
    }

  }, [nationalities])

  return {
    users, setUsers, isLoading, maxCatalogueSize
  }
}

export default useUsers