import axios, { AxiosInstance } from 'axios'

declare module 'Vue/types/vue' {
    interface Vue {
        axios: AxiosInstance
    }
}

declare namespace Cache {
    export interface NameParam {
        nameParam: string
    }
}