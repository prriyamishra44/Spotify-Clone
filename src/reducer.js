export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 
    // "BQAWnekNv9rced4NU4uEssFZvusLiv6qFSU9lUtEtgPrk2y7oY81gZk6AODA6zocLXBzhAyoK-_QQGVeldoqqKY9Vjynq-9rzfd8aWDf_8t1VJCUgJ9GrMFfL_N3ejhjO3hw_APJruz8AzbRYVfbdQ0MI5ue1xDs2VvMIQA7EGDOJQMhH4b4JtQtXeJ4Kv1W96A0ziazKcpnit0eKKvc",
};

const reducer = (state, action) =>{
console.log(action);
//Action -> type, [payload]
switch(action.type){
    case 'SET_USER':
        return{
            ...state,
            user: action.user,
        };

        case "SET_PLAYING":
            return{
                ...state,
                playing: action.playing,
            }
        case "SET_ITEM":
            return{
                ...state,
                item: action.item,
            }
        case "SET_DISCOVER_WEEKLY":
                return{
                    ...state,
                    discover_weekly: action.discover_weekly,
                };        

        case "SET_TOP_ARTISTS":
            return{
                ...state,
                top_artists: action.top_artists,
            }        
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            }
        
        case "SET_SPOTIFY":
            return{
                ...state,
                spotify: action.spotify,
            }    
            case 'SET_PLAYLISTS':
                return{
                    ...state,
                    playlists: action.playlists,
                };

            
        default:
            return state;
}
};

export default reducer;