import { Photo } from "./photo";



    export interface Member {
        id: number;
        username: string;
        lastName: string;
        photoUrl: string;
        age: number;
        created: Date;
        lastActive: Date;
        gender: string;
        introduction: string;
        interests: string;
        city: string;
        country: string;
        photos: Photo[];
    }

    




