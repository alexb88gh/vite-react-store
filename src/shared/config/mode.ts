export type appMode = 'development' | 'production'

export const isDev: boolean = import.meta.env.DEV
export const isProduction: boolean = import.meta.env.PROD
export const mode: appMode = import.meta.env.MODE as appMode
