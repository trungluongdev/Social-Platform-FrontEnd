const postReducer = (
  state = { posts: [], loading: false, error: false, uploading: false },
  action
) => {
  debugger;
  switch (action.type) {
    case 'UPLOAD_START':
      return { ...state, uploading: true, error: false };
    case 'UPLOAD_SUCCESS':
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return {
        ...state,
        posts: [action.data, ...state.posts],
        uploading: false,
        error: false,
      };
    case 'UPLOAD_FAIL':
      return { ...state, uploading: false, error: true };
    case 'DELETE_SUCCESS':
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
        loading: false,
        error: false,
      };

    case 'COMMENT_POST_SUCCESS':
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload ? action.data : post
        ),
        loading: false,
        error: false,
      };

    default:
      return state;
  }
};

export default postReducer;
