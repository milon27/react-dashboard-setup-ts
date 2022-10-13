interface IResponse<T> {
    error: boolean
    message: string
    response?: T
}
export default IResponse