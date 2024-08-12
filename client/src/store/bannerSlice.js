import {createSlice} from '@reduxjs/toolkit';

const bannerSlice = createSlice({
    name: 'banner',
    initialState: {
        showBanner: 1,
        bannerDescription: '',
        bannerTimer: 0,
        bannerId: '',
        bannerLink: ''
        
    },
    reducers: {
        setBanner(state, action){
            state.showBanner = action.payload.showBanner;
            state.bannerDescription = action.payload.bannerDescription;
            state.bannerTimer = action.payload.bannerTimer;
            state.bannerId = action.payload.bannerId;
            state.bannerLink = action.payload.bannerLink;
        },
        closeBanner(state){
            state.showBanner = 0;
        }
    }
})

export const {setBanner, closeBanner} = bannerSlice.actions;
export default bannerSlice.reducer;