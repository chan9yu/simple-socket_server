import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovesModule } from './moves/moves.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
	imports: [ConfigModule.forRoot({ isGlobal: true }), RoomsModule, MovesModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
