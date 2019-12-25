import { css } from "glamor";

export const ROOT_ELEMENT_ID = 'root'
export const NAV_WIDTH = 200
export const ROW_HEIGHT = 60
export const sticky = (top: number) => css({
  position: 'sticky',
  top,
  zIndex: 100,
})
export const positionRelative = css({ position: 'relative' })
export const blackBorder = (skipTopLeft = false) => {
  const border = '1px solid black'

  return skipTopLeft ?
    css({ borderBottom: border, borderRight: border }) :
    css({ border })
}

export const SEARCH_MARGIN = 20
export const SEARCH_HEIGHT = 60