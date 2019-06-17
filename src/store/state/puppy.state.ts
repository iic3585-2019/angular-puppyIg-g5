import { Puppy } from './../models/puppy.model';
import { AddPuppy, RemovePuppy, LikePuppy, CommentPuppy } from './../actions/puppy.actions';
import {State, Action, StateContext, Selector} from '@ngxs/store'

export class PuppyStateModel{
    puppies: Puppy[]
}

@State<PuppyStateModel>({
    name: 'puppies',
    defaults: {
        puppies: []
    }
})

export class PuppyState{
    @Action(AddPuppy)
    add({getState, patchState}: StateContext<PuppyStateModel>, {payload}:AddPuppy ){
        patchState({
            puppies: [...getState().puppies, ...payload]
        })
    }

    @Action(RemovePuppy)
    remove({getState, patchState}: StateContext<PuppyStateModel>, {payload}:RemovePuppy ){
        patchState({
            puppies: getState().puppies.filter(a => a != payload)
        })
    }

    @Action(LikePuppy)
    like({getState, patchState}: StateContext<PuppyStateModel>, {payload}:LikePuppy ){
        let pos:number = getState().puppies.indexOf(payload)
        let new_state:Puppy[] = getState().puppies
        new_state[pos].liked = !new_state[pos].liked
        patchState({
            puppies: [...new_state]
        })
    }

    @Action(CommentPuppy)
    comment({getState, patchState}: StateContext<PuppyStateModel>, {payload}:CommentPuppy ){
        let pos:number = getState().puppies.indexOf(payload.puppy)
        let new_state:Puppy[] = getState().puppies
        new_state[pos].comments.push(payload.comment)
        patchState({
            puppies: [...new_state]
        })
    }
}