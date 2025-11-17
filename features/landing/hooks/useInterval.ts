"use client";

import { useEffect, useRef } from "react";

/**
 * React hook that invokes a callback on a repeating timer and keeps the callback reference up to date.
 *
 * Keeps the most recent `callback` and calls it every `delay` milliseconds; the interval is created when `delay` is a number and cleared on unmount or when `delay` changes.
 *
 * @param callback - Function to be invoked on each interval tick; the hook always calls the latest provided callback.
 * @param delay - Interval period in milliseconds; if `null` no interval is created.
 */
export function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef(callback);

  // Save the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    if (delay === null) return;

    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}