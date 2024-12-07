import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { dashboardService } from '../services/dashboard.service.js'

export default function useFetch(additionUrl){

    // const BASE_API_URL = 'http://localhost:3000/api'

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const fetchData = useCallback(async()=>{
        console.log("fetchData"); 
        try {
            setError('')
            setLoading(true)
            const data = await dashboardService.getAllDashboards()

            // const response = await axios.get(`${BASE_API_URL}/${additionUrl}`)
            setData(data)
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)            
        }
    }, [])

    useEffect(()=>{
        fetchData()
    }, [fetchData])

    return {data, loading, error}
}
