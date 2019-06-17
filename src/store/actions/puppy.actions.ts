import { Puppy } from '../models/puppy.model';

export class AddPuppy{
    static readonly type = '[PUPPY] Add'

    constructor (public payload: Puppy[]){}
}

export class RemovePuppy{
    static readonly type = '[PUPPY] Remove'

    constructor (public payload: Puppy){}
}