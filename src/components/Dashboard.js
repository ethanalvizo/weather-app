import React, { useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_WEATHER } from '../graphql/Queries'

const Dashboard = () => {
    const [search, setSearch] = useState("");
    const [weatherQuery, {loading, data, error}] = useLazyQuery(GET_WEATHER, {
        variables: { name: search }
    })

    if (error) return <h1>Error Found</h1>
    if (data) {
        console.log(data)
    }

    return (
        <div className="home">
            <h1>Search For Weather</h1>
            <input type="text" placeholder="City name..." onChange={(event) => { setSearch(event.target.value) }} />
            <button onClick={() => weatherQuery()}>Search</button>

        </div>
    )
}

export default Dashboard
