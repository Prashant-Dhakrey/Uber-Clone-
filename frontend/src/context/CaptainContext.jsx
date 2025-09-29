import React from 'react'
import { createContext,useState,useContext } from 'react'

export const CaptainDataContext = createContext();

export const userCaptain = () =>{
    
    const context = useContext(CaptainContext);
    if(!context){
        throw new Error('useCaptain must be used within a CaptainProvider');
    }
    return context;
}

const CaptainContext = ({children}) => {

    const [captain,setCapatin] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptain = (captainData)=>{
        setCapatin(captainData)

    }

    const value = {
        captain,
        setCapatin,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain
    };

  return (
    <CaptainDataContext.Provider>
       {children}
    </CaptainDataContext.Provider>
  )
}

export default CaptainContext
