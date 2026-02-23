import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { QuranVerse } from './quran-verse.entity';

@Entity({ name: 'quranchapter', schema: 'sanad' })
export class QuranChapter {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column()
  chapternum: number;

  @OneToMany(() => QuranVerse, (verse) => verse.chapter)
  verses: QuranVerse[];
}