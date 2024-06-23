import { EventRepo } from "../domain/event.repo";
import { Event } from "../domain/event";
export class CreateEvent {
    constructor(private repo: EventRepo){}
    async exe(e: Event): Promise<void>{
        return this.repo.createEvent(e);
    }
}