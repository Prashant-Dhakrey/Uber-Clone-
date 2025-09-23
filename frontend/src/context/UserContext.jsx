import React,{createContext, useState} from 'react'

export const UserDataContext = createContext()

const UserContext = ({children}) => {

    const [UserContext,setUserContext] = useState({
        
        email: "",
        fullName:{
             firstName: "",
             lastName:  ""
        }
    })


  return (
    <div>
     <UserDataContext.Provider value={[UserContext,setUserContext] }>
        {children}
     </UserDataContext.Provider>
    </div>
  )
}

export default UserContext
