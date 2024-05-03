import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        "user": {
            name: "Jimmy",
            phone: "01289223643",
            address: "Alexandria",
            password: "123456789",
            birthDate: "1999-11-04",
            email: "Devjimmy99@gmail.com",
        }
    },
    reducers: {
        createNewUser(state, action) {
        },
        async setUserLogin(state, action) {
            console.log('Action:', action.payload);
            await fetch('/api/users', { method: 'POST', body: JSON.stringify(action.payload) })
                .then(res => res.json())
                .then(data => { console.log('Response:', data); });
        },
        setUserLogout(state, action) {
            state.user = {};
        }
    }
});
export const { createNewUser, setUserLogin, setUserLogout } = userSlice.actions;
export default userSlice.reducer