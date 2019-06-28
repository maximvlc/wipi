export interface IConfig {
  database: {
    host: string
    port: number
    username: string
    password: string
    database: string
  }
  app: {
    port: number
  }
  router: {
    prefix: string
  }
  token: {
    secret: string
    expires: number
    unless: RegExp[]
  }
}
