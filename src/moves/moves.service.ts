import { Injectable, Logger } from '@nestjs/common';

import { Movie } from './moves.constants';
import { Seat, seats } from './moves.data';

@Injectable()
export class MovesService {
	private logger = new Logger('Moves Service');

	private avatar = [...seats];
	private antman = [...seats];
	private cats = [...seats];

	private setStatus(seats: Seat[], seat: string) {
		const newSeats = seats.map(i => {
			let tempSeat = { ...i };
			if (i.seatNumber === seat) {
				tempSeat = { ...i, status: 3 };
			}

			return tempSeat;
		});

		return newSeats;
	}

	/** 영화에 따른 좌석 데이터 반환 */
	public getSeats(movie: Movie) {
		let seats: Seat[][] = [];

		switch (movie) {
			case Movie.Avatar:
				seats = this.avatar;
				break;
			case Movie.Antman:
				seats = this.antman;
				break;
			case Movie.Cats:
				seats = this.cats;
				break;
			default:
				this.logger.error(`잘못된 movie 값: ${movie}`);
				break;
		}

		return seats;
	}

	/** 최종 확정된 좌석의 상태를 반환 */
	public setSeats(roomNumber: Movie, seat: string) {
		let seats: Seat[][] = [];

		switch (roomNumber) {
			case Movie.Avatar:
				seats = [...this.avatar].map(s => this.setStatus(s, seat));
				this.avatar = [...seats];
				break;
			case Movie.Antman:
				seats = [...this.antman].map(s => this.setStatus(s, seat));
				this.antman = [...seats];
				break;
			case Movie.Cats:
				seats = [...this.cats].map(s => this.setStatus(s, seat));
				this.cats = [...seats];
				break;
			default:
				this.logger.error(`잘못된 roomNumber 값: ${roomNumber}`);
				break;
		}

		return seats;
	}
}
