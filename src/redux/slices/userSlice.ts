import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UsersStateProps {
    users: UserProps[]
    isLoading: boolean
    error: string | null
}

const initialState: UsersStateProps = {
    users: [],
    isLoading: false,
    error: null
}

export const fetchUsers = createAsyncThunk<UserProps[]>("users/fetchUsers", async () => {
    const res = await fetch("https://dummyjson.com/users")
    const data = await res.json()
    return data?.users
})

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<UserProps[]>) => {
            state.users = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true
        }).addCase(fetchUsers.fulfilled, (state, action: PayloadAction<UserProps[]>) => {
            state.users = action.payload
            state.isLoading = false
        }).addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.error.message || 'Something went wrong'
            state.isLoading = false
        })
    }
})

export const { setUsers } = usersSlice.actions
export default usersSlice.reducer