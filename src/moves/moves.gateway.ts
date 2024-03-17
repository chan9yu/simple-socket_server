import { Logger } from '@nestjs/common';
import {
	ConnectedSocket,
	MessageBody,
	OnGatewayConnection,
	OnGatewayDisconnect,
	SubscribeMessage,
	WebSocketGateway
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

import { Movie } from './moves.constants';
import { MovesService } from './moves.service';

@WebSocketGateway({ cors: true, namespace: 'move' })
export class MovesGateway implements OnGatewayConnection, OnGatewayDisconnect {
	private logger = new Logger('Moves');

	constructor(private readonly movesService: MovesService) {}

	public handleConnection(@ConnectedSocket() socket: Socket) {
		this.logger.log(`disconnected: ${socket.id} ${socket.nsp.name}`);
	}

	public handleDisconnect(@ConnectedSocket() socket: Socket) {
		this.logger.log(`connected: ${socket.id} ${socket.nsp.name}`);
	}

	@SubscribeMessage('join_room')
	public joinRoom(@MessageBody() roomName: string, @ConnectedSocket() socket: Socket) {
		socket.join(roomName);
	}

	@SubscribeMessage('join')
	public join(@MessageBody() movie: Movie, @ConnectedSocket() socket: Socket) {
		this.logger.log(`>>> recv join: ${movie}`);
		socket.join(movie);
		socket.to(movie).emit('seatMessage', this.movesService.getSeats(movie));
		this.logger.log(`<<< send seatMessage: ${movie}`);
	}

	@SubscribeMessage('addSeat')
	public addSeat(@MessageBody() seat: string, @ConnectedSocket() socket: Socket) {
		this.logger.log(`>>> recv addSeat: ${seat}`);
		const myRooms = Array.from(socket.rooms);
		const roomNumber = myRooms[1] as Movie;
		socket.to(myRooms[1]).emit('seatMessage', this.movesService.setSeats(roomNumber, seat));
		this.logger.log(`<<< send seatMessage`);
	}
}
