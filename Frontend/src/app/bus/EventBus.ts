// tslint:disable-next-line: prefer-const
import * as bus from 'eventbusjs';

export default class EventBus {

    public static instance: EventBus;

    public static getInstance(): EventBus {
        if (!this.instance) {
            this.instance = new EventBus();
        }
        return this.instance;
    }

    public emit(eventName: string, params: any): void {
        bus.dispatch(eventName, params);
    }

    public listen(eventName, callback) {
        bus.addEventListener(eventName, callback);
    }
}
