import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useContext } from 'react';
import { get, set } from 'mongoose';

const BASE_URL = 'http://localhost:3001/api/v1/';

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {

    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    const addIncome = async (income)=>  {
        const response = await axios.post(`${BASE_URL}add-income`, income)
        .catch((err) =>{
            setError(err.response.data.message)
            console.log(response.data)
        })
}

    const getIncomes = async ()=>  {
        const response = await axios.get(`${BASE_URL}get-income`)
        setIncomes(response.data)
    }

    getIncomes()

    return(
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}