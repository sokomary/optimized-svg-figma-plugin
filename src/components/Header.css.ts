import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const title = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

export const actions = style({
  alignSelf: 'flex-end',
});

export const button = recipe({
  base: {
    height: '24px',
    padding: '4px 8px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
  },
  variants: {
    kind: {
      primary: {
        backgroundColor: '#0d99ff',
        color: 'white',
        selectors: {
          '&:active': {
            background: '#007be5',
          },
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        color: '#000000e5',
        border: '1px solid #e6e6e6',
        selectors: {
          '&:hover': {
            background: '#e6e6e6',
          },
        },
      },
    },
  },
});
