import {
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

@Controller('songs')
export class SongsController {
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAllSongs(): Promise<any[]> {
    return;
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findSong(@Param('id') id: number): Promise<any[]> {
    return;
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  async createSong(@Body() id: number): Promise<any[]> {
    return;
  }

  @Put('id')
  @HttpCode(HttpStatus.OK)
  async updateSong(@Param('id') id: number): Promise<any[]> {
    return;
  }

  @Delete('id')
  @HttpCode(HttpStatus.OK)
  async deleteSong(@Param('id') id: number): Promise<any[]> {
    return;
  }
}
