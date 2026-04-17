import { configureStore } from '@reduxjs/toolkit'
import  likeSlice  from '../features/likeSlice'; 
import  skillsSlice  from '../features/skillsSilce';

export const store = configureStore ({
    reducer: {
        like: likeSlice,
        skills: skillsSlice
    },

})

