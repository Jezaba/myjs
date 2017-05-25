declare type Eventname = 'click' | 'hover' | 'mouse-enter';
declare function on(eventName: Eventname, callback: Function): void;
