import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { QuranVerse } from './quran-verse.entity';

@Entity({ name: 'literal', schema: 'sanad' })
export class Literal {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'text', nullable: true })
  adoc: string;

  @Column({ type: 'text', nullable: true })
  html: string;

  @Column()
  inlanguage: string;

  @Column({ nullable: true })
  creativework_id: string;

  @ManyToOne(() => QuranVerse, (verse) => verse.translations)
  @JoinColumn({ name: 'creativework_id' })
  verse: QuranVerse;
}
