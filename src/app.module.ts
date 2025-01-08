import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './message/message.module';
import { UserModule } from './user/user.module';
import { ContactModule } from './contact/contact.module';
import { PrivatechatModule } from './privatechat/privatechat.module';
import { CONFIG_DATABASE } from './shared/config-database';

@Module({
  imports: [CONFIG_DATABASE(), MessageModule, UserModule, ContactModule, PrivatechatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
