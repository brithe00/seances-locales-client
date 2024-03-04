import { Cross2Icon } from '@radix-ui/react-icons';
import DataTableViewOptions from './data-table-view-options';
import DataTableFacetedFilter from './data-table-faceted-filter';
import ModeToggle from './mode-toggle';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { directors } from './directors';
import { cinema } from './cinema';
import { production } from './production';

const DataTableToolbar = ({ table }) => {
	const isFiltered = table.getState().columnFilters.length > 0;

	return (
		<div className="flex items-center justify-between">
			<div className="flex flex-1 items-center space-x-2">
				<ModeToggle />
				<Input
					placeholder="Filter tasks..."
					value={table.getColumn('movie_title')?.getFilterValue() ?? ''}
					onChange={(event) =>
						table.getColumn('movie_title')?.setFilterValue(event.target.value)
					}
					className="h-8 w-[150px] lg:w-[250px]"
				/>
				{table.getColumn('movie_director.name') && (
					<DataTableFacetedFilter
						column={table.getColumn('movie_director.name')}
						title="Directors"
						options={directors}
					/>
				)}
				{table.getColumn('cinema_name') && (
					<DataTableFacetedFilter
						column={table.getColumn('cinema_name')}
						title="Cinema"
						options={cinema}
					/>
				)}
				{table.getColumn('movie_releaseDate') && (
					<DataTableFacetedFilter
						column={table.getColumn('movie_releaseDate')}
						title="Production"
						options={production}
					/>
				)}
				{isFiltered && (
					<Button
						variant="ghost"
						onClick={() => table.resetColumnFilters()}
						className="h-8 px-2 lg:px-3"
					>
						Reset
						<Cross2Icon className="ml-2 h-4 w-4" />
					</Button>
				)}
			</div>
			<DataTableViewOptions table={table} />
		</div>
	);
};

export default DataTableToolbar;
