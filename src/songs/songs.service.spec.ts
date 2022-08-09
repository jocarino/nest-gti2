import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Song, SongSchema } from '../schemas/song.schema';
import { SongsModule } from './songs.module';
import { SongsService } from './songs.service';

describe('SongsService', () => {
  let service: SongsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SongsService,
        {
          provide: getModelToken(Song.name),
          useValue: SongsModule,
        },
      ],
    }).compile();

    service = module.get<SongsService>(SongsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
