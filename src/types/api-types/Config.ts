
export interface Config {
    baseURL: string;
    headers?: {
        'Accept': string,
        'Content-Type': string,
        'Authorization': string | null
    }; 
    method: string,
    token?:string,
    data?: any
}
