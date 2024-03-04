import DataTable from './components/data-table';
import { sessions } from './components/sessions';
import { columns } from './components/columns';
import RenderData from './components/render-data';

function App() {
	return (
		<>
			<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
				[WIP] - NO MOBILE VIEW - ONLY DESKTOP
			</h3>
			<div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
				<DataTable data={sessions} columns={columns} />
			</div>
			<div>
				<RenderData data={sessions} />
			</div>
		</>
	);
}

export default App;
