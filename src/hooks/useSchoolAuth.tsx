import React from 'react'
import useSwr from "swr"
import { registerSchool } from '../api/schoolapi'

const useSchoolAuth = () => {
    
    const {data, mutate} = useSwr('api/register-school', registerSchool)

  return {data, mutate}
}

export default useSchoolAuth