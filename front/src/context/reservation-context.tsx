import { createContext } from "react";

const DEFAULT_RESERVATION: any = {};

export const ReservationContext = createContext<any>(DEFAULT_RESERVATION);
