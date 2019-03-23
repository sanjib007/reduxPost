
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';


export const fatchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload : response.data
    });
};

// export const fatchUser = (id) => async dispatch => {
//     const response = await jsonPlaceholder.get('/users/' + id);
//     dispatch({
//         type: 'FETCH_USER',
//         payload : response.data
//     });
// };

// export const fatchUser = _.memoize(function(id) {
//     return async function (dispatch) {
//         const response = await jsonPlaceholder.get('/users/' + id);
//         dispatch({
//             type: 'FETCH_USER',
//             payload : response.data
//         });
//     };
// }); 

export const fatchUser = id => dispatch => _fatchUser(id, dispatch);

const _fatchUser = _.memoize( async (id, dispatch) => {
        const response = await jsonPlaceholder.get('/users/' + id);
        dispatch({
            type: 'FETCH_USER',
            payload : response.data
        });
    });


