// store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/hook/cart/cartSlice'; // ตรวจสอบเส้นทางให้ถูกต้อง

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store; // ใช้ default export ที่นี่
