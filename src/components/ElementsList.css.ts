import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '4px 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  width: '100%',
  borderBottom: '1px solid #e6e6e6',
});

export const note = style({
  fontSize: '12px',
  color: '#008043',
});
