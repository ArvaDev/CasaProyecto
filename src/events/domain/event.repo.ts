import { Event } from "./event";

export interface EventRepo {
    createEvent(e: Event): Promise<void>; // guarda el evento en la base de datos
    getHistory(): Promise<Event[] | null>; // Obtiene el historial
    deleteHistory(): Promise<void>; //Borra el historial
}