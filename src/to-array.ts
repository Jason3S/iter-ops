import {Piper} from './common';

export function toArray<T>(): Piper<T, T[]> {
    return (iterator: Iterable<T>) => ({
        [Symbol.iterator](): Iterator<T[]> {
            let value: T[], done = false;
            return {
                next(): IteratorResult<T[]> {
                    if (!done) {
                        value = [];
                        for (const a of iterator) {
                            value.push(a);
                        }
                        done = true
                        return {value};
                    }
                    return {value, done};
                }
            };
        }
    });
}