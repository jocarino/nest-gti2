import { ApiProperty } from '@nestjs/swagger';

export class CreateSongDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty({ required: false })
  platform?: string;

  @ApiProperty({ required: false })
  artists?: any[];
}
