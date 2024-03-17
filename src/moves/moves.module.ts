import { Module } from '@nestjs/common';

import { MovesGateway } from './moves.gateway';
import { MovesService } from './moves.service';

@Module({
	providers: [MovesGateway, MovesService]
})
export class MovesModule {}
