import { Action } from '@ngrx/store';

import { Player } from '../models/player.model';
import { PlayerActions } from '../actions/player.actions';
import { TrackActions } from '../actions/track.actions';

export type PlayerState = Player;

const initialState: PlayerState = {
  isPlaying: false,
  currentTrack: {
    id: 0,
    title: '',
    artist: '',
    imgUrl: '',
    streamUrl: '',
    duration: 0
  },
  volume: 5,
};

export default function (state = initialState, action: Action): PlayerState {
  switch (action.type) {

    // // is set an immutable import?
    // case PlayerActions.PLAYING_AUDIO:
    // return state.set('isPlaying', true) as PlayerState;
    //
    // case PlayerActions.PAUSED_AUDIO:
    //   return state.set('isPlaying', false) as PlayerState;
    case TrackActions.TOGGLE_PLAY_PAUSE: {
      // Pause Track because we clicked the track that was already playing.
      if (state.currentTrack.id === action.payload.id) {
         return Object.assign({}, state, {
          isPlaying: !state.isPlaying,
        });
      } else {  // Change Track and keep playing.
        return Object.assign({}, state, {
          isPlaying: true,
          currentTrack: action.payload
        });
      }
    }

    case PlayerActions.TOGGLE_PLAY_PAUSE:  {
      return Object.assign({}, state, {
          isPlaying: !state.isPlaying,
      });
    }

    case PlayerActions.JUMP_TO_NEXT:
      return Object.assign({}, state, {
        currentTrack: action.payload
      });

    case PlayerActions.JUMP_TO_PREVIOUS:
      return Object.assign({}, state, {
        currentTrack: action.payload
      });

    default: {
      return state;
    }
  }
}
