import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { zip } from 'rxjs';
import { Message } from './entities/message.entity';

@Module({
  controllers: [MessageController],
  providers: [MessageService],
  exports: [Message]
})
export class MessageModule {}
