import { Test, TestingModule } from '@nestjs/testing';
import { PrivatechatController } from './privatechat.controller';
import { PrivatechatService } from './privatechat.service';

describe('PrivatechatController', () => {
  let controller: PrivatechatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrivatechatController],
      providers: [PrivatechatService],
    }).compile();

    controller = module.get<PrivatechatController>(PrivatechatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
