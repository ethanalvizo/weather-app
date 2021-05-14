import React from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_WEATHER } from '../graphql/Queries'

const Dashboard = () => {
    const [weatherQuery, {loading, data, error}] = useLazyQuery(GET_WEATHER, {
        variables: { name: "Waterloo"}
    })

    if (error) return <h1>Error Found</h1>
    if (data) {
        console.log(data)
    }

    return (
        <div className="home">
            <h1>Search For Weather</h1>
            <input type="text" placeholder="City name..." />
            <button onClick={() => weatherQuery()}>Search</button>
        </div>
    )
}

export default Dashboard
