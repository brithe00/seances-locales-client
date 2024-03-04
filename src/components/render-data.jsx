const RenderData = ({ data }) => {
	return (
		<div>
			<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
				What the data look like :
			</h3>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
};

export default RenderData;
