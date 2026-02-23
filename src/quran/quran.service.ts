import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { QuranVerse } from './entity/quran-verse.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { QuranChapter } from './entity/quran-chapter.entity';
import { SurahDto } from './dto/surah.dto';
import { VerseDto } from './dto/verse.dto';

@Injectable()
export class QuranService {
  constructor(
    @InjectRepository(QuranVerse)
    private quranVerseRepository: Repository<QuranVerse>,
    @InjectRepository(QuranChapter)
    private chapterRepository: Repository<QuranChapter>,
  ) {}

  async findSurah(chapterId: string): Promise<SurahDto | null> {
    const chapter = await this.chapterRepository.findOne({
      where: { chapternum: parseInt(chapterId) },
      relations: ['verses', 'verses.text', 'verses.translations'],
    });

    if (!chapter) {
      return null;
    }

    const surahDto = new SurahDto();
    surahDto.chapterNumber = chapter.chapternum;
    surahDto.name = chapter.name;
    surahDto.verses = chapter.verses.map((verse) => {
      const verseDto = new VerseDto();
      verseDto.verseNumber = verse.versenum;
      verseDto.text = verse.text?.adoc || '';
      verseDto.translations =
        verse.translations?.find((t) => t.inlanguage === 'en')?.adoc || '';
      return verseDto;
    });

    return surahDto;
  }
}