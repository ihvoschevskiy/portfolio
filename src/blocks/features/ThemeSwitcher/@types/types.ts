export type TSelectedColorSchemas = 'dark' | 'light' | 'auto'

export type TSavedColorSchemas = Exclude<TSelectedColorSchemas, 'auto'>
