import { apiSlice } from "./apiSlice";

const USERS_URL = '/api/users'

export const usersApislice = apiSlice.injectEndpoints({
    endpoints : (builder) =>({
        login : builder.mutation({
            query : (data) =>({
                url : `${USERS_URL}/login`,
                method : 'POST',
                body : data
            })
        }),
        logout : builder.mutation({
            query : ()=>({
              url :  `${USERS_URL}/logout`,
            method: 'POST'})
        }),
        register : builder.mutation({
            query: (data)=>({
                url: `${USERS_URL}/register`,
                method : 'POST', 
                body : data
            })
        }),
        updateUserProfile : builder.mutation({
            query: (data)=>({
                url : `${USERS_URL}/updateUser`,
                method  : 'PUT',
                body: data
            })
        }),
        deleteUserProfile : builder.mutation({
            query : ()=>({
                url : `${USERS_URL}/profile`,
                method : 'DELETE'
            })
        })
    })
})

export const {useLoginMutation , useLogoutMutation , useRegisterMutation , useUpdateUserProfileMutation , useDeleteUserProfileMutation} 
= usersApislice