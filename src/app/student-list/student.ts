import { Subjects } from './subjects.enum';

export class Student {

    constructor(public firstName: string,
                public lastName: string,
                public email: string,
                public favoriteSubject: Subjects,
                public grade: number,
                public feesDue: number) {

    }

}