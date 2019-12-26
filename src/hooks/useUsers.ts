import { useState, useEffect } from "react";
import fetchAndStoreUsers, { maxCatalogueSize } from "../utils/fetchAndStoreUsers";

/**
 * Hook to handle fetching users on scroll and setting loading state.
 * 
 * @param param0 {nationalities}: the nationalities that should be fetched
 */
const useUsers = ({ nationalities }: { nationalities: string[] }) => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [scrollTop, setScrollTop] = useState(0)


  const handleScroll = () => {
    setScrollTop(document.documentElement.scrollTop)
    if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight * 0.9) {
      fetchAndStoreUsers({
        page: page + 1,
        shouldAppend: true,
        setIsLoading,
        users,
        setUsers: setUsers as () => {},
        nationalities
      })
      setPage(page + 1)
    }
  }

  window.onscroll = handleScroll

  useEffect(() => {
    fetchAndStoreUsers({
      page: 1,
      shouldAppend: false,
      users,
      setUsers: setUsers as () => {},
      nationalities,
      setIsLoading
    })
    setPage(1)

    return () => {
      window.onscroll = null
    }

  }, [nationalities])

  return {
    users,
    setUsers,
    isLoading,
    maxCatalogueSize,
    scrollTop
  }
}

export default useUsers