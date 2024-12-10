import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '500px',
  width: '100%',
  textAlign: 'center',
  flexDirection: 'column',
  gap: '10px',
});
