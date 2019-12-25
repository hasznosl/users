import React from 'react'
import { sticky, NAV_WIDTH, SEARCH_HEIGHT } from '../utils/styles';
import { css } from 'glamor';
import { Link } from 'react-router-dom';

const Navigation = () => <div {...sticky(0)} {...css({
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
  <Link {...css({ marginBottom: 5 })} to="/">Home</Link>
  <Link {...css({ marginBottom: 5 })} to="/settings">Settings</Link>
</div>

export default Navigation