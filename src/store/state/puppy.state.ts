import { Puppy } from './../models/puppy.model';
import { AddPuppy, RemovePuppy } from './../actions/puppy.actions';
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
    // @Selector()
    // static getTutorials(state: TutorialStateModel){
    //     return state.tutorials
    // }

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
}