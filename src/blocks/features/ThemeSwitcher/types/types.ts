export type TSelectedColorSchema = 'dark' | 'light' | 'auto'

export type TSavedColorSchema = Exclude<TSelectedColorSchema, 'auto'>
