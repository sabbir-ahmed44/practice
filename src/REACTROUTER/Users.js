import { Outlet,useSearchParams } from "react-router-dom"

export const Users = () => { 
    const [searchParams, setSearchParams] =useSearchParams()
 const showActiverUsers = searchParams.get('filter') === 'active'
  return (
    <div>
        <h1>user is 1</h1>
        <h1>user is 2</h1>
        <h1>user is 3</h1>
        <h1>user is 4</h1>

     
      
        <button onClick={() => setSearchParams({ filter: 'active' })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
     
      {showActiverUsers ? (
        <h2>Showing active users</h2>
      ) : (
        <h2>Showing all users</h2>
      )
    }
    <Outlet />
    </div>

   
  )
}
