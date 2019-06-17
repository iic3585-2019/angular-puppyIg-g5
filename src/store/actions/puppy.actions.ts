import { Puppy } from '../models/puppy.model';

export class AddPuppy{
    static readonly type = '[PUPPY] Add'

    constructor (public payload: Puppy[]){}
}

export class LikePuppy{
    static readonly type = '[PUPPY] Like'

    constructor (public payload: {puppy:Puppy, like:boolean}){}
}

export class CommentPuppy{
    static readonly type = '[PUPPY] Comment'

    constructor (public payload: {puppy:Puppy, comment:string}){}
}