import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  padding: 5,
  height: 'calc(100% - 10px)',
  fontFamily:
    "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, SFProLocalRange",
  overflowY: 'auto',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '10px',
});
globalStyle(`${content} > div:last-of-type`, {
  borderBottom: 'none',
});

export const emptyState = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '500px',
  width: '100%',
  textAlign: 'center',
  flexDirection: 'column',
  gap: '10px',
});

export const title = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

export const emptyNote = style({
  fontSize: '14px',
  color: '#00000080',
});

export const element = style({
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
