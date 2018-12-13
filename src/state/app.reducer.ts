import { AppState } from './app.state';

const initialState: AppState = {
    produits: [],
    lien: 'initialisation'
};

export function reducer(state = initialState, action: any) {
    switch (action.type) {
        case 'GETPRODUITSALL':
            return {
                ...state,
                produits: action.payload.produits,
                lien: action.payload.lien
            };
        default:
            return state;
    }
}
