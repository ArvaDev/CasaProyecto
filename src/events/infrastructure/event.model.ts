import mongoose, { Schema } from "mongoose";
import { Event } from "../domain/event";
const eventSchema = new Schema<Event>({
    action: { type: String },
    state: { type: Boolean },
    tipo: { type: String }
})
const EventModel = mongoose.model<Event>('historial', eventSchema);
export default EventModel;