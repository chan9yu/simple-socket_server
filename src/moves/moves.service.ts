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
		return seats.map(i => {
			let tempSeat = { ...i };
			if (i.seatNumber === seat) {
				tempSeat = { ...i, status: 3 };
			}

			return tempSeat;
		});
	}

	/** 영화에 따른 좌석 데이터 반환 */
	public getSeats(movie: Movie) {
		let tempSeat: Seat[][] = [];

		switch (movie) {
			case Movie.Avatar:
				tempSeat = this.avatar;
				break;
			case Movie.Antman:
				tempSeat = this.antman;
				break;
			case Movie.Cats:
				tempSeat = this.cats;
				break;
			default:
				this.logger.log(`잘못된 movie 값: ${movie}`);
				break;
		}

		return tempSeat;
	}

	/** 최종 확정된 좌석의 상태를 반환 */
	public setSeats(roomNumber: Movie, seat: string) {
		let tempSeat: Seat[][] = [];

		switch (roomNumber) {
			case Movie.Avatar:
				tempSeat = [...this.avatar].map(s => this.setStatus(s, seat));
				this.avatar = [...tempSeat];
				break;
			case Movie.Antman:
				tempSeat = [...this.antman].map(s => this.setStatus(s, seat));
				this.antman = [...tempSeat];
				break;
			case Movie.Cats:
				tempSeat = [...this.cats].map(s => this.setStatus(s, seat));
				this.cats = [...tempSeat];
				break;
			default:
				break;
		}

		return tempSeat;
	}
}
