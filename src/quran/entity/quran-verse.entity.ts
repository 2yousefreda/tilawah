import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { QuranChapter } from './quran-chapter.entity';
import { Literal } from './literal.entity';

@Entity({ name: 'quranverse', schema: 'sanad' })
export class QuranVerse {
  @PrimaryColumn()
  id: string;

  @Column()
  versenum: number;

  @Column()
  chapter_id: string;

  @ManyToOne(() => QuranChapter, (chapter) => chapter.verses)
  @JoinColumn({ name: 'chapter_id' })
  chapter: QuranChapter;

  @ManyToOne(() => Literal)
  @JoinColumn({ name: 'text_id' })
  text: Literal;

  @OneToMany(() => Literal, (literal) => literal.verse)
  translations: Literal[];
}
