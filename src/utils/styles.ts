import { css } from "glamor";

export const ROOT_ELEMENT_ID = 'root'
export const NAV_HEIGHT = 60
export const ROW_HEIGHT = 30
export const sticky = (top: number) => css({ position: 'sticky', top, zIndex: 100, backgroundColor: 'white', height: ROW_HEIGHT })
export const positionRelative = css({ position: 'relative' })
export const blackBorder = css({ border: '1px solid black' })