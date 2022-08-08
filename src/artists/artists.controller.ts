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
import { NotFoundError } from 'rxjs';
import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist.dto';

@Controller('artists')
export class ArtistsController {
  constructor(private artistsService: ArtistsService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAllArtists() {
    return await this.artistsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findArtist(@Param('id') id: string) {
    const artist = await this.artistsService.find(id);

    if (!artist) {
      throw new BadRequestException('Artist not found');
    }

    return artist;
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async createArtist(@Body() createArtistDto: CreateArtistDto) {
    const newArtist = await this.artistsService.create(createArtistDto);
    return `Artist ${createArtistDto.name} successfully created. \n ${newArtist}`;
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateArtist(
    @Param('id') id: string,
    @Body() createArtistDto: CreateArtistDto,
  ) {
    const updatedArtist = await this.artistsService.update(id, createArtistDto);
    return `Artist ${createArtistDto.name} successfully updated.`;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteArtist(@Param('id') id: string) {
    const deletedArtist = await this.artistsService.delete(id);
    return `Artist ${deletedArtist.name} successfully deleted.`;
  }
}
