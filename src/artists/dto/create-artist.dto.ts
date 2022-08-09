import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class CreateArtistDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty({ required: false })
  profile?: string;

  @ApiProperty({ required: false })
  songs?: any[];
}
