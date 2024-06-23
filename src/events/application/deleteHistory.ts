import { EventRepo } from "../domain/event.repo";
export class DeleteHistory{
    constructor(private repo: EventRepo){}
    async exe(): Promise<void>{
        return this.repo.deleteHistory();
    }
}