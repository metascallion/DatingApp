import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    photoUri: string;
    city: string;
    country: string;
    interess?: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
}
