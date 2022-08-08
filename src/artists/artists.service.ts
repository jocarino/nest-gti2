import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Artist, ArtistDocument } from 'src/schemas/artist.schema';
import { CreateArtistDto } from './dto/create-artist.dto';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectModel(Artist.name) private artistModel: Model<ArtistDocument>,
  ) {}

  async create(createArtistDto: CreateArtistDto) {
    const createdArtist = new this.artistModel(createArtistDto);
    return createdArtist.save();
  }

  async findAll(): Promise<Artist[]> {
    return this.artistModel.find().exec();
  }

  async find(id: string): Promise<Artist> {
    return this.artistModel.findById(id).exec();
  }

  async update(id: string, createArtistDto: CreateArtistDto) {
    const updatedArtist = this.artistModel.findByIdAndUpdate(
      id,
      createArtistDto,
    );
    return updatedArtist;
  }

  async delete(id: string) {
    return this.artistModel.findByIdAndDelete(id).exec();
  }
}
