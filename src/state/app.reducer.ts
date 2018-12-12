import { AppState} from './app.state';

const initialState: AppState = {
  produit: [],
  lien: 'initialisation'
};

export function reducer(state = initialState, action) {
  console.log('In reducer : ', action);
  switch (action.type) {
    case 'GETPRODUITSALL':
      const newState = {
        ...state,
        produit: action.payload,
        lien: 'modifié!'
      }
      return newState;
      default:
        return state;
  }
}


