import { VerseDto } from "./verse.dto";

export class SurahDto {
    chapterNumber: number;
    name: string;
    verses: VerseDto[];
}