import {
    IsDate,
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
} from 'class-validator';

export class CreateEventDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsDate()
    @IsNotEmpty()
    date: Date;

    @IsEmail()
    ownerEmail: string;
}
