import React from 'react'
import { sticky, NAV_WIDTH, SEARCH_HEIGHT, blackBorder } from '../utils/styles';
import { css } from 'glamor';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {

  const location = useLocation()
  const highlightIfActive = (pathname: string) => {
    console.log(location.pathname === pathname)
    return ((location.pathname === pathname) ? blackBorder(false) : {})
  }

  return <div {...sticky(0)} {...css({
    height: `calc(100vh - ${SEARCH_HEIGHT}px)`,
    width: NAV_WIDTH,
    minWidth: NAV_WIDTH,
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRight: '1px solid black',
    padding: `${SEARCH_HEIGHT}px 0px 0px ${SEARCH_HEIGHT}px`
  })}>
    <Link
      {...css({ padding: 5, marginBottom: 10 })}
      {...highlightIfActive('/')}
      to="/"
    >
      Home
    </Link>
    <Link
      to="/settings"
      {...css({ padding: 5 })}
      {...highlightIfActive('/settings')}
    >
      Settings
    </Link>
  </div>
}

export default Navigation