
import React, { useEffect, useState } from "react";

type countryType = {
    name:{common:string},
    region:string,
    flags:{png:string}
}
const Country = () => {
const [country, setCountry] = useState<countryType>()
const [search, setSearch] = useState('')

const handleSearch = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearch(e.target.value)
}

    const GetCountry = async()=>{
        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${search}`);
            if (!response.ok) {
                throw new Error
            }
            const data = await response.json();
            console.log(data[0])
            setCountry(data[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        GetCountry();
    },[])
  return (
    <div>
        <input value={search} onChange={handleSearch} type="text" placeholder="Country Name" />
        <button onClick={GetCountry} >Search</button>
        <h2>Name: {country?.name.common}</h2>
        <h3>Region: {country?.region}</h3>
        <img src={country?.flags.png} alt="" />
    </div>
  )
}

export default Country