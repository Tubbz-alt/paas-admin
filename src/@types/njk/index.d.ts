declare module '*.njk' {
  export function render(params: object, cb?: any): string;
}
