// app/page.tsx
"use client";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store'; // ตรวจสอบเส้นทางให้ถูกต้อง
import { addItem, reduceItem, removeItem, clearCart } from '@/hook/cart/cartSlice';
import { useState, useEffect } from 'react';

export default function Home() {
    const items = useSelector((state: RootState) => state.cart.items);
    const dispatch: AppDispatch = useDispatch();
    const [onMounted, setOnMounted] = useState(false);

    useEffect(() => {
        setOnMounted(true);
    }, []);

    if (!onMounted) {
        return <div>Loading...</div>;
    }

    const handleAddItem = () => {
        const newItem = {
            id: '1',
            name: 'Sample Item',
            price: 100,
            quantity: 1,
        };
        dispatch(addItem(newItem));
    };

    const handleReduceItem = (id: string) => {
        dispatch(reduceItem(id));
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <button onClick={handleAddItem}>Add Item</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                        <button onClick={() => handleReduceItem(item.id)}>Reduce</button>
                        <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Total: ${items.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
    );
}
