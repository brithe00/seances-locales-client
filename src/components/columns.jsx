import DataTableColumnHeader from './data-table-column-header';

export const columns = [
	{
		accessorKey: 'id',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Id" />
		),
		cell: ({ row }) => <div className="w-[80px]">{row.getValue('id')}</div>,
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: 'movie.title',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Title" />
		),
		cell: ({ row }) => {
			return (
				<span className="max-w-[500px] truncate font-medium">
					{row.getValue('movie_title')}
				</span>
			);
		},
	},
	{
		accessorKey: 'movie.director.name',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Director" />
		),
		cell: ({ row }) => {
			return (
				<span className="max-w-[500px] truncate font-medium">
					{row.getValue('movie_director.name')}
				</span>
			);
		},
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},

	{
		accessorKey: 'cinema.name',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Cinema" />
		),
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},

	{
		accessorKey: 'movie.releaseDate',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Production" />
		),
		filterFn: (row, id, value) => {
			return value.includes(row.getValue(id));
		},
	},
];
