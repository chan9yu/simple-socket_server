import { Logger } from '@nestjs/common';
import {
	ConnectedSocket,
	MessageBody,
	OnGatewayConnection,
	OnGatewayDisconnect,
	OnGatewayInit,
	SubscribeMessage,
	WebSocketGateway
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

import { Seat, seats } from './moves.data';
import { Movie } from './moves.constants';

@WebSocketGateway({ cors: true, namespace: 'move' })
export class MovesGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
	private logger = new Logger('Moves');

	// dummy data list
	public avatar = [...seats];
	public antman = [...seats];
	public cats = [...seats];

	constructor() {
		this.logger.log('move gateway constructor');
	}

	public afterInit() {
		this.logger.log('init');
	}

	public handleConnection(@ConnectedSocket() socket: Socket) {
		this.logger.log(`disconnected : ${socket.id} ${socket.nsp.name}`);
	}

	public handleDisconnect(@ConnectedSocket() socket: Socket) {
		this.logger.log(`connected : ${socket.id} ${socket.nsp.name}`);
	}

	/** 최종 확정된 좌석의 상태를 반환 */
	public setSeats(roomNumber: Movie, seat: string) {
		let tempSeat: Seat[][] = [];

		function setStatus(seats: Seat[]) {
			return seats.map(i => {
				let tempSeat = { ...i };
				if (i.seatNumber === seat) {
					tempSeat = { ...i, status: 3 };
				}

				return tempSeat;
			});
		}

		switch (roomNumber) {
			case Movie.Avatar:
				tempSeat = [...this.avatar].map(s => setStatus(s));
				this.avatar = [...tempSeat];
				break;
			case Movie.Antman:
				tempSeat = [...this.antman].map(s => setStatus(s));
				this.antman = [...tempSeat];
				break;
			case Movie.Cats:
				tempSeat = [...this.cats].map(s => setStatus(s));
				this.cats = [...tempSeat];
				break;
			default:
				break;
		}

		return tempSeat;
	}

	@SubscribeMessage('join')
	public join(@MessageBody() movie: Movie, @ConnectedSocket() socket: Socket) {
		let tempSeat: Seat[][] = [];
		socket.join(movie);

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
				break;
		}

		socket.in(movie).emit('seatMessage', tempSeat);
	}

	@SubscribeMessage('addSeat')
	public addSeat(@MessageBody() seat: any, @ConnectedSocket() socket: Socket) {
		const myRooms = Array.from(socket.rooms);
		const roomNumber = myRooms[1] as Movie;
		socket.in(myRooms[1]).emit('seatMessage', this.setSeats(roomNumber, seat));
	}
}
