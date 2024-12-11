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
    color: 'white',
  },
  variants: {
    kind: {
      primary: {
        backgroundColor: 'var(--figma-color-bg-brand)',
        selectors: {
          '&:active': {
            background: 'var(--figma-color-bg-brand-pressed)',
          },
          '&:hover': {
            background: 'var(--figma-color-bg-brand-hover)',
          },
        },
      },
      secondary: {
        backgroundColor: 'transparent',
        border: '1px solid var(--figma-color-text-oncomponent-tertiary)',
        selectors: {
          '&:hover': {
            background: 'var(--figma-color-text-oncomponent-tertiary)',
          },
        },
      },
    },
  },
});
