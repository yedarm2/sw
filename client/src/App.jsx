export const App = () => {
	return (
		<div
			onClick={() => {
				fetch('https://jsonplaceholder.typicode.com/posts');
			}}
		>
			Hello
		</div>
	);
};
