import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Artist, ArtistSchema } from '../../src/schemas/artist.schema';
import { ArtistsModule } from './artists.module';
import { ArtistsService } from './artists.service';

describe('ArtistsService', () => {
  let service: ArtistsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArtistsService,
        {
          provide: getModelToken(Artist.name),
          useValue: ArtistsModule,
        },
      ],
    }).compile();

    service = module.get<ArtistsService>(ArtistsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
