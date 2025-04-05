import { useState } from "react"

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const fetching = async(params) => {
        try {
            setIsLoading(true)
            await callback(params)
        } catch {
            setError(error.massage)
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error]
}