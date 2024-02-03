import React, { FC, useEffect } from "react"
import axios from "axios"

export const AboutUs: FC = () => {
    useEffect(() => {
        axios('http://localhost:8080/api/students', {
            method: "GET"
        }).then(res => {
            console.log('res:', res.data)
        })

    }, [])
    return <div>
        hello
    </div>
}