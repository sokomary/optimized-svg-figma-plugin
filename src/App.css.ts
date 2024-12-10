import {style} from "@vanilla-extract/css";

export const container = style({
  height: '100%',
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
})

export const elements = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  height: '100%',
})

export const actions = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
})

export const buttonDownload = style({
  width: 'fit-content',
})

export const buttonCancel = style({
  width: 'fit-content',
  marginRight: 0,
  marginLeft: 'auto',
})