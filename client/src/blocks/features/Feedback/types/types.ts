export type TSuccess = 'success' | 'error'
export type TInputs = { [key: string]: string }
export type TValidateSchema = {
  required?: string
  pattern?: { value: RegExp; message: string }
  validate?: { [key: string]: (value: string) => boolean | string }
}
