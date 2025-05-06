import { createSignal, createEffect } from 'solid-js';

export const ClickCount = () => {
    const [count, setCount] = createSignal(0);

    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>Click Me</button>
            <p>Count: {count()}</p>
        </div>
    );
}