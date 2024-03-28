import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./Store";

// Creates typed hooks based on RootState
// Use throughout your app instead of plain `useDispatch` and `useSelector` to prevent 'Cant read value of undefined' errors
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
