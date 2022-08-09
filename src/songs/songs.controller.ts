import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAllSongs(createSongDto: CreateSongDto) {
    return await this.songService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findSong(@Param('id') id: string) {
    const song = await this.songService.find(id);

    if (!song) {
      throw new BadRequestException('Song not found');
    }

    return song;
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async createSong(@Body() CreateSongDto: CreateSongDto) {
    const newSong = await this.songService.create(CreateSongDto);
    return `Song ${CreateSongDto.name} successfully created. \n ${newSong}`;
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateSong(
    @Param('id') id: string,
    @Body() createSongDto: CreateSongDto,
  ) {
    await this.songService.update(id, createSongDto);
    const updatedSong = await this.songService.find(id);
    return `Song ${updatedSong.name} successfully updated.\n ${updatedSong}`;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteSong(@Param('id') id: string) {
    const deletedSong = await this.songService.delete(id);
    return `Song ${deletedSong.name} successfully deleted.`;
  }
}
