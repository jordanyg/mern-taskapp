import { apiSlice } from "./apiSlice";

const TASKS_URL = '/api/tasks'

export const tasksApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        addTask : builder.mutation({
            query : (data)=>({
                url : `${TASKS_URL}/add`,
                method : 'POST',
                body : data
            })
        })
        
    })
})