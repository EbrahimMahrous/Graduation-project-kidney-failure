import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserLoginState {
    name: string | null;
    email: string | null;
    loggedIn: boolean;
    userData: any | null
}



const initialState: IUserLoginState = JSON.parse(localStorage.getItem("user")!) || {
    name: null,
    email: null,
    loggedIn: false,
    userData: null
};

const userLoginSlice = createSlice({
    name: 'userLogin',
    initialState,
    reducers: {
        setUserLogin: (state, action: PayloadAction<IUserLoginState>) => {
            return { ...state, ...action.payload };
        },
        login: (state, action: PayloadAction<IUserLoginState>) => {
            state.loggedIn = true
            state.name = action.payload.name
            state.email = action.payload.email
            state.userData = action.payload.userData
            localStorage.setItem('userLogin', JSON.stringify(state));
        },
        logout: () => {
            localStorage.removeItem('user');
            return initialState;
        },
    },
});

export const { setUserLogin, logout, login } = userLoginSlice.actions;
export default userLoginSlice.reducer;