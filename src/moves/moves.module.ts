import { Module } from '@nestjs/common';
import { MovesGateway } from './moves.gateway';

@Module({
	providers: [MovesGateway]
})
export class MovesModule {}
