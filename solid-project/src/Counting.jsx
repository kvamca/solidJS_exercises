import { createSignal, onCleanup } from "solid-js";


export const CountingComponent = () => {
	const [count, setCount] = createSignal(0);
	const interval = setInterval(
		() => setCount(c => c + 1),
		1000
	);
	onCleanup(() => clearInterval(interval));
	return <div>Count value is {count()}</div>;
};
