import {AnyIterable, AsyncIterableExt, AsyncOperation, IterableExt, Operation} from './types';
import {extendAsyncIterable, extendIterable, optimizeIterable} from './utils';

type MixedOperation<T, R> = Operation<T, R> | AsyncOperation<T, R>;

/**
 * Pipes a synchronous iterable through the list of operators, and returns an extended synchronous iterable.
 */
export function pipe<T>(i: Iterable<T>): IterableExt<T>;
export function pipe<T, A>(i: Iterable<T>, p0: Operation<T, A>): IterableExt<A>;
export function pipe<T, A, B>(i: Iterable<T>, p0: Operation<T, A>, p1: Operation<A, B>): IterableExt<B>;
export function pipe<T, A, B, C>(i: Iterable<T>, p0: Operation<T, A>, p1: Operation<A, B>, p2: Operation<B, C>): IterableExt<C>;
export function pipe<T, A, B, C, D>(i: Iterable<T>, p0: Operation<T, A>, p1: Operation<A, B>, p2: Operation<B, C>, p3: Operation<C, D>): IterableExt<D>;
export function pipe<T, A, B, C, D, E>(i: Iterable<T>, p0: Operation<T, A>, p1: Operation<A, B>, p2: Operation<B, C>, p3: Operation<C, D>, p4: Operation<D, E>): IterableExt<E>;
export function pipe<T, A, B, C, D, E, F>(i: Iterable<T>, p0: Operation<T, A>, p1: Operation<A, B>, p2: Operation<B, C>, p3: Operation<C, D>, p4: Operation<D, E>, p5: Operation<E, F>): IterableExt<F>;
export function pipe<T, A, B, C, D, E, F, G>(i: Iterable<T>, p0: Operation<T, A>, p1: Operation<A, B>, p2: Operation<B, C>, p3: Operation<C, D>, p4: Operation<D, E>, p5: Operation<E, F>, p6: Operation<F, G>): IterableExt<G>;
export function pipe<T, A, B, C, D, E, F, G, H>(i: Iterable<T>, p0: Operation<T, A>, p1: Operation<A, B>, p2: Operation<B, C>, p3: Operation<C, D>, p4: Operation<D, E>, p5: Operation<E, F>, p6: Operation<F, G>, p7: Operation<G, H>): IterableExt<H>;
export function pipe<T, A, B, C, D, E, F, G, H, I>(i: Iterable<T>, p0: Operation<T, A>, p1: Operation<A, B>, p2: Operation<B, C>, p3: Operation<C, D>, p4: Operation<D, E>, p5: Operation<E, F>, p6: Operation<F, G>, p7: Operation<G, H>, p8: Operation<H, I>): IterableExt<I>;
export function pipe<T, A, B, C, D, E, F, G, H, I, J>(i: Iterable<T>, p0: Operation<T, A>, p1: Operation<A, B>, p2: Operation<B, C>, p3: Operation<C, D>, p4: Operation<D, E>, p5: Operation<E, F>, p6: Operation<F, G>, p7: Operation<G, H>, p8: Operation<H, I>, p9: Operation<I, J>): IterableExt<J>;

/**
 * Pipes an asynchronous iterable through the list of operators, and returns an extended asynchronous iterable.
 */
export function pipe<T>(i: AnyIterable<T>): AsyncIterableExt<T>;
export function pipe<T, A>(i: AnyIterable<T>, p0: MixedOperation<T, A>): AsyncIterableExt<A>;
export function pipe<T, A, B>(i: AnyIterable<T>, p0: MixedOperation<T, A>, p1: MixedOperation<A, B>): AsyncIterableExt<B>;
export function pipe<T, A, B, C>(i: AnyIterable<T>, p0: MixedOperation<T, A>, p1: MixedOperation<A, B>, p2: MixedOperation<B, C>): AsyncIterableExt<C>;
export function pipe<T, A, B, C, D>(i: AnyIterable<T>, p0: MixedOperation<T, A>, p1: MixedOperation<A, B>, p2: MixedOperation<B, C>, p3: MixedOperation<C, D>): AsyncIterableExt<D>;
export function pipe<T, A, B, C, D, E>(i: AnyIterable<T>, p0: MixedOperation<T, A>, p1: MixedOperation<A, B>, p2: MixedOperation<B, C>, p3: MixedOperation<C, D>, p4: MixedOperation<D, E>): AsyncIterableExt<E>;
export function pipe<T, A, B, C, D, E, F>(i: AnyIterable<T>, p0: MixedOperation<T, A>, p1: MixedOperation<A, B>, p2: MixedOperation<B, C>, p3: MixedOperation<C, D>, p4: MixedOperation<D, E>, p5: MixedOperation<E, F>): AsyncIterableExt<F>;
export function pipe<T, A, B, C, D, E, F, G>(i: AnyIterable<T>, p0: MixedOperation<T, A>, p1: MixedOperation<A, B>, p2: MixedOperation<B, C>, p3: MixedOperation<C, D>, p4: MixedOperation<D, E>, p5: MixedOperation<E, F>, p6: MixedOperation<F, G>): AsyncIterableExt<G>;
export function pipe<T, A, B, C, D, E, F, G, H>(i: AnyIterable<T>, p0: MixedOperation<T, A>, p1: MixedOperation<A, B>, p2: MixedOperation<B, C>, p3: MixedOperation<C, D>, p4: MixedOperation<D, E>, p5: MixedOperation<E, F>, p6: MixedOperation<F, G>, p7: MixedOperation<G, H>): AsyncIterableExt<H>;
export function pipe<T, A, B, C, D, E, F, G, H, I>(i: AnyIterable<T>, p0: MixedOperation<T, A>, p1: MixedOperation<A, B>, p2: MixedOperation<B, C>, p3: MixedOperation<C, D>, p4: MixedOperation<D, E>, p5: MixedOperation<E, F>, p6: MixedOperation<F, G>, p7: MixedOperation<G, H>, p8: MixedOperation<H, I>): AsyncIterableExt<I>;
export function pipe<T, A, B, C, D, E, F, G, H, I, J>(i: AnyIterable<T>, p0: MixedOperation<T, A>, p1: MixedOperation<A, B>, p2: MixedOperation<B, C>, p3: MixedOperation<C, D>, p4: MixedOperation<D, E>, p5: MixedOperation<E, F>, p6: MixedOperation<F, G>, p7: MixedOperation<G, H>, p8: MixedOperation<H, I>, p9: MixedOperation<I, J>): AsyncIterableExt<J>;

export function pipe(i: any, ...p: any[]): IterableExt<any> | AsyncIterableExt<any> {
    if (i[Symbol.iterator]) {
        return extendIterable(p.reduce((c, a) => a(c), optimizeIterable(i)));
    }
    return extendAsyncIterable(p.reduce((c, a) => a(c), i));
}
