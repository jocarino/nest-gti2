import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import mongoose from 'mongoose';
import { Song } from '../schemas/song.schema';
import { SongsController } from './songs.controller';
import { SongsModule } from './songs.module';
import { SongsService } from './songs.service';

describe('SongsController', () => {
  let controller: SongsController;
  let service: SongsService;

  const test_song: Song = {
    name: 'test',
    description: '',
    platform: '',
    artists: [],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SongsController],
      providers: [
        SongsService,
        {
          provide: getModelToken(Song.name),
          useValue: SongsModule,
        },
      ],
    }).compile();

    controller = module.get<SongsController>(SongsController);
    service = module.get<SongsService>(SongsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('Find all songs', () => {
    it('should return every song', async () => {
      const test_songs: Song[] = [
        { ...test_song, name: 'test1' },
        { ...test_song, name: 'test2' },
      ];

      jest.spyOn(service, 'findAll').mockImplementation(async () => test_songs);

      expect(await service.findAll()).toStrictEqual(test_songs);
    });
  });

  describe('Find song by id', () => {
    it('should return every song', async () => {
      jest.spyOn(service, 'find').mockImplementation(async () => test_song);

      expect(await service.find('hash_id')).toStrictEqual(test_song);
    });
  });

  describe('updated song by id', () => {
    it('should return updated song', async () => {
      jest.spyOn(service, 'update').mockResolvedValue(test_song);

      expect(
        await service.update('hash_id', {
          name: 'test_updated',
        }),
      ).toStrictEqual(test_song);
    });
  });

  describe('delete song by id', () => {
    it('delete the song with the provided id', async () => {
      jest.spyOn(service, 'delete').mockImplementation(async () => test_song);

      expect(await service.delete('hash_id')).toStrictEqual(test_song);
    });
  });
});
