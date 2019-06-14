import {State, Action, StateContext, Selector} from '@ngxs/store'
import { AddTutorial, RemoveTutorial } from './../actions/tutorial.actions';
import { Tutorial } from './../models/tutorial.model';

export class TutorialStateModel{
    tutorials: Tutorial[]
}

@State<TutorialStateModel>({
    name: 'tutorials',
    defaults: {
        tutorials: []
    }
})

export class TutorialState{
    @Selector()
    static getTutorials(state: TutorialStateModel){
        return state.tutorials
    }

    @Action(AddTutorial)
    //Con setState se puede cambiar el estado
    add({getState, patchState}: StateContext<TutorialStateModel>, {payload}:AddTutorial ){
        patchState({
            tutorials: [...getState().tutorials, payload]
        })
    }

    @Action(RemoveTutorial)
    //Con setState se puede cambiar el estado
    remove({getState, patchState}: StateContext<TutorialStateModel>, {payload}:RemoveTutorial ){
        patchState({
            tutorials: getState().tutorials.filter(a => a.name != payload)
        })
    }
}