import { Test, TestingModule } from '@nestjs/testing';
import { PrivatechatService } from './privatechat.service';

describe('PrivatechatService', () => {
  let service: PrivatechatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrivatechatService],
    }).compile();

    service = module.get<PrivatechatService>(PrivatechatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
