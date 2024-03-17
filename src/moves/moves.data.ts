export const seats = [
	[
		{ status: 1, seatNumber: 'A-0' },
		{ status: 1, seatNumber: 'A-1' },
		{ status: 0, seatNumber: 'A-2' },
		{ status: 0, seatNumber: 'A-3' },
		{ status: 0, seatNumber: 'A-4' },
		{ status: 0, seatNumber: 'A-5' },
		{ status: 0, seatNumber: 'A-6' },
		{ status: 0, seatNumber: 'A-7' },
		{ status: 0, seatNumber: 'A-8' },
		{ status: 0, seatNumber: 'A-9' },
		{ status: 1, seatNumber: 'A-10' },
		{ status: 1, seatNumber: 'A-11' }
	],
	[
		{ status: 1, seatNumber: 'B-0' },
		{ status: 1, seatNumber: 'B-1' },
		{ status: 0, seatNumber: 'B-2' },
		{ status: 1, seatNumber: 'B-3' },
		{ status: 1, seatNumber: 'B-4' },
		{ status: 1, seatNumber: 'B-5' },
		{ status: 1, seatNumber: 'B-6' },
		{ status: 1, seatNumber: 'B-7' },
		{ status: 1, seatNumber: 'B-8' },
		{ status: 0, seatNumber: 'B-9' },
		{ status: 1, seatNumber: 'B-10' },
		{ status: 1, seatNumber: 'B-11' }
	],
	[
		{ status: 1, seatNumber: 'C-0' },
		{ status: 1, seatNumber: 'C-1' },
		{ status: 0, seatNumber: 'C-2' },
		{ status: 1, seatNumber: 'C-3' },
		{ status: 1, seatNumber: 'C-4' },
		{ status: 1, seatNumber: 'C-5' },
		{ status: 1, seatNumber: 'C-6' },
		{ status: 1, seatNumber: 'C-7' },
		{ status: 1, seatNumber: 'C-8' },
		{ status: 0, seatNumber: 'C-9' },
		{ status: 1, seatNumber: 'C-10' },
		{ status: 1, seatNumber: 'C-11' }
	],
	[
		{ status: 1, seatNumber: 'D-0' },
		{ status: 1, seatNumber: 'D-1' },
		{ status: 0, seatNumber: 'D-2' },
		{ status: 1, seatNumber: 'D-3' },
		{ status: 1, seatNumber: 'D-4' },
		{ status: 1, seatNumber: 'D-5' },
		{ status: 1, seatNumber: 'D-6' },
		{ status: 1, seatNumber: 'D-7' },
		{ status: 1, seatNumber: 'D-8' },
		{ status: 0, seatNumber: 'D-9' },
		{ status: 1, seatNumber: 'D-10' },
		{ status: 1, seatNumber: 'D-11' }
	],
	[
		{ status: 1, seatNumber: 'E-0' },
		{ status: 1, seatNumber: 'E-1' },
		{ status: 0, seatNumber: 'E-2' },
		{ status: 1, seatNumber: 'E-3' },
		{ status: 1, seatNumber: 'E-4' },
		{ status: 1, seatNumber: 'E-5' },
		{ status: 1, seatNumber: 'E-6' },
		{ status: 1, seatNumber: 'E-7' },
		{ status: 1, seatNumber: 'E-8' },
		{ status: 0, seatNumber: 'E-9' },
		{ status: 1, seatNumber: 'E-10' },
		{ status: 1, seatNumber: 'E-11' }
	],
	[
		{ status: 1, seatNumber: 'F-0' },
		{ status: 1, seatNumber: 'F-1' },
		{ status: 0, seatNumber: 'F-2' },
		{ status: 1, seatNumber: 'F-3' },
		{ status: 1, seatNumber: 'F-4' },
		{ status: 1, seatNumber: 'F-5' },
		{ status: 1, seatNumber: 'F-6' },
		{ status: 1, seatNumber: 'F-7' },
		{ status: 1, seatNumber: 'F-8' },
		{ status: 0, seatNumber: 'F-9' },
		{ status: 1, seatNumber: 'F-10' },
		{ status: 1, seatNumber: 'F-11' }
	],
	[
		{ status: 1, seatNumber: 'G-0' },
		{ status: 1, seatNumber: 'G-1' },
		{ status: 0, seatNumber: 'G-2' },
		{ status: 1, seatNumber: 'G-3' },
		{ status: 1, seatNumber: 'G-4' },
		{ status: 1, seatNumber: 'G-5' },
		{ status: 1, seatNumber: 'G-6' },
		{ status: 1, seatNumber: 'G-7' },
		{ status: 1, seatNumber: 'G-8' },
		{ status: 0, seatNumber: 'G-9' },
		{ status: 1, seatNumber: 'G-10' },
		{ status: 1, seatNumber: 'G-11' }
	]
];

export type Seat = (typeof seats)[0][0];
