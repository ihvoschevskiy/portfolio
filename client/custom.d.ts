declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.css' {
  const content: Record<string, string>
  // const content: { [index: string]: string }
  export default content
}
