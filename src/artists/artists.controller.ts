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
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Artist } from 'src/schemas/artist.schema';
import { ArtistsService } from './artists.service';
import { CreateArtistDto } from './dto/create-artist.dto';

@Controller('artists')
export class ArtistsController {
  constructor(private artistsService: ArtistsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all artists' })
  async findAllArtists() {
    return await this.artistsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all artist with id' })
  async findArtist(@Param('id') id: string) {
    const artist = await this.artistsService.find(id);

    if (!artist) {
      throw new BadRequestException('Artist not found');
    }

    return artist;
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Create new artist' })
  async createArtist(@Body() createArtistDto: CreateArtistDto) {
    const newArtist = await this.artistsService.create(createArtistDto);
    return `Artist ${createArtistDto.name} successfully created. \n ${newArtist}`;
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all artist with id' })
  @ApiBody({
    type: CreateArtistDto,
  })
  async updateArtist(
    @Param('id') id: string,
    @Body() createArtistDto: CreateArtistDto,
  ) {
    await this.artistsService.update(id, createArtistDto);
    const updatedArtist = await this.artistsService.find(id);
    return `Artist ${updatedArtist.name} successfully updated. \n ${updatedArtist}`;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete artist with id' })
  async deleteArtist(@Param('id') id: string) {
    const deletedArtist = await this.artistsService.delete(id);
    return `Artist ${deletedArtist.name} successfully deleted.`;
  }
}
