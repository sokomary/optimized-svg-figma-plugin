declare module 'svgo/dist/svgo.browser.js' {
  export function optimize(source: string, options?: { plugins?: {name: string, params?: object }[], multipass?: boolean }): { data: string }
} 