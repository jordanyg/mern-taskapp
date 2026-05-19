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
        }),
        getTask: builder.query({
            query: ()=>({
                url : `${TASKS_URL}/get`,
                method: 'GET'
            })
        }),
        updateUserTask : builder.mutation({
            query: (data )=>({
                url: `${TASKS_URL}/update/${data.id}`,
                method: 'PUT',
                body :data
            })
        }),
        deleteUserTask : builder.mutation({
            query: (id)=>({
                url: `${TASKS_URL}/delete/${id}`,
                method : 'DELETE'
            })
        })

    })
})

export const {useAddTaskMutation , useGetTaskQuery , useUpdateUserTaskMutation ,useDeleteUserTaskMutation} =tasksApiSlice