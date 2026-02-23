import { Module } from '@nestjs/common';
import { QuranService } from './quran.service';
import { QuranController } from './quran.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuranChapter } from './entity/quran-chapter.entity';
import { QuranVerse } from './entity/quran-verse.entity';
import { Literal } from './entity/literal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuranChapter, QuranVerse, Literal])],
  providers: [QuranService],
  controllers: [QuranController],
})
export class QuranModule {}
