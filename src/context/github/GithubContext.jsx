import { createContext, useState, useEffect, useReducer } from 'react'
import githubReducer from './GitHubReducer'
export const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  }
  const setLoading=()=>{
       dispatch({type:'SET_LOADING'})
    }

  const [state, dispatch] = useReducer(githubReducer, initialState)
  const clearUsers = () => {
    dispatch({ type: 'CLEAR_USERS' })
    }
 const searchUsers = async (text) => {
    setLoading()
    const param=new URLSearchParams({
        q:text,
    });
    const res = await fetch(`https://api.github.com/search/users?${param}`)

    const {items} = await res.json()
   

   
    dispatch({type:'GET_USER',payload:items})
    }
  
  const fetchUsers = async () => {
      setLoading()
    const res = await fetch('https://api.github.com/users')
    const data = await res.json()

    dispatch({ type: 'GET_USER', payload: data })
  }
  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loadingm,searchUsers,clearUsers }}>
      {children}
    </GithubContext.Provider>
  )
}
