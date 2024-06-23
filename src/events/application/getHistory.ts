import { EventRepo } from "../domain/event.repo";
import { Event } from "../domain/event";
export class GetHistory {
    constructor(private repo: EventRepo){}
    async exe(): Promise<Event[] | null>{
        return this.repo.getHistory();
    }
}