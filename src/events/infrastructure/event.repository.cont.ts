import EventModel from "./event.model";
import { Event } from "../domain/event";
import { EventRepo } from "../domain/event.repo";
export class EventRepoCont implements EventRepo{
    async createEvent(e: Event): Promise<void> {
        const newEvent = new EventModel(e);
        await newEvent.save();
        return newEvent.toObject();
    }
    async getHistory(): Promise<Event[] | null> {
        return await EventModel.find().exec();
    }
    async deleteHistory(): Promise<void> {
        await EventModel.deleteMany({}).exec();
    }
}