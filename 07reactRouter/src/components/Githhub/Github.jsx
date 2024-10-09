import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect( () => {

    //     fetch("https://api.github.com/users/rahul-kapgate")
    //       .then((res) => res.json())
    //       .then((data) => setData(data));
    // },[])

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github followers: {data.followers}
      </div>
      <div className="flex justify-center items-center">
        <img
          className="rounded-full text-center"
          src={data.avatar_url}
          alt="git pic"
          width={200}
        />
      </div>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Bio : {data.bio}
      </div>
    </>
  );
}

export default Github

export const GithubInfoLoader = async () => {

    const respons = await fetch("https://api.github.com/users/rahul-kapgate")

    return respons.json()
}
