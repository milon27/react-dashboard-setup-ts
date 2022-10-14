import axios from "axios"
import React from "react"
import { toast } from "react-toastify"
import IResponse from "./models/Response"

/**
 * 
 * @param ReturnType {Return Type}
 * @param InputType {Input Type}
 */
const postData = async <ReturnType, InputType>(
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    url: string,
    data: InputType,
    onDone: (result: ReturnType) => void
) => {
    setLoading(true)
    try {
        const result = await axios.post<IResponse<ReturnType>>(url, data)
        if (result.data.error == false) {
            onDone(result.data.response!)
        } else {
            toast(result.data.message)
        }
    } catch (e) {
        const message = (e as any).response.data.message || (e as Error).message
        toast(message)
    } finally {
        setLoading(false)
    }
}

const getData = async <T>(
    url: string,
    onDone: (result: T) => void,
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>
) => {
    setLoading && setLoading(true)
    try {
        const result = await axios.get<IResponse<T>>(url)
        if (result.data.error == false) {
            onDone(result.data.response!)
        } else {
            toast(result.data.message)
        }
    } catch (e) {
        console.log(e);
        const message = (e as any).response.data.message || (e as Error).message
        toast(message)
    } finally {
        setLoading && setLoading(false)
    }
}

const deleteData = async <T>(
    url: string,
    onDone: (result: T) => void,
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>,
) => {
    setLoading && setLoading(true)
    try {
        const result = await axios.delete<IResponse<T>>(url)
        if (result.data.error == false) {
            onDone(result.data.response!)
        } else {
            toast(result.data.message)
        }
    } catch (e) {
        console.log(e);
        const message = (e as any).response.data.message || (e as Error).message
        toast(message)
    } finally {
        setLoading && setLoading(false)
    }
}

const putData = async <ReturnType, InputType>(
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    url: string,
    data: InputType,
    onDone: (result: ReturnType) => void
) => {
    setLoading(true)
    try {
        const result = await axios.put<IResponse<ReturnType>>(url, data)
        if (result.data.error == false) {
            onDone(result.data.response!)
        } else {
            toast(result.data.message)
        }
    } catch (e) {
        console.log(e);
        toast((e as Error).message)
    } finally {
        setLoading(false)
    }
}

const AxiosHelper = {
    postData, getData, deleteData, putData
}
export default AxiosHelper
