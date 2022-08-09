import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ObjectId } from 'mongoose';
import { async } from 'rxjs';
import { CreateSongDto } from 'src/songs/dto/create-song.dto';
import { Artist, ArtistDocument } from '../schemas/artist.schema';
import { ArtistsController } from './artists.controller';
import { ArtistsModule } from './artists.module';
import { ArtistsService } from './artists.service';

describe('ArtistsController', () => {
  let controller: ArtistsController;
  let service: ArtistsService;

  const test_artist: Artist = {
    name: 'test_updated',
    description: '',
    profile: '',
    songIds: [],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtistsController],
      providers: [
        ArtistsService,
        {
          provide: getModelToken(Artist.name),
          useValue: ArtistsModule,
        },
      ],
    }).compile();

    controller = module.get<ArtistsController>(ArtistsController);
    service = module.get<ArtistsService>(ArtistsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Find all artists', () => {
    it('should return every artist', async () => {
      const test_artists: Artist[] = [
        { ...test_artist, name: 'test1' },
        { ...test_artist, name: 'test2' },
      ];

      jest
        .spyOn(service, 'findAll')
        .mockImplementation(async () => test_artists);

      expect(await service.findAll()).toStrictEqual(test_artists);
    });
  });

  describe('Find artist by id', () => {
    it('should return every artist', async () => {
      jest.spyOn(service, 'find').mockImplementation(async () => test_artist);

      expect(await service.find('hash_id')).toStrictEqual(test_artist);
    });
  });

  describe('updated artist by id', () => {
    it('should return updated artist', async () => {
      jest.spyOn(service, 'update').mockResolvedValue(test_artist);

      expect(
        await service.update('hash_id', {
          name: 'test_updated',
        }),
      ).toStrictEqual(test_artist);
    });
  });

  describe('delete artist by id', () => {
    it('delete the artist with the provided id', async () => {
      jest.spyOn(service, 'delete').mockImplementation(async () => test_artist);

      expect(await service.delete('hash_id')).toStrictEqual(test_artist);
    });
  });
});
