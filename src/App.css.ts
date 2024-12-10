import { globalStyle, style } from '@vanilla-extract/css';

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
