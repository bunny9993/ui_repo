import {
    FETCH_QUESTIONS_PENDING,
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_ERROR,
    SESSION_EXPIRED_ERROR,
} from "../Actions/FetchQuestions.actions";


const initialState = {
    questionsPending: false,
    questionsError: false,
    questionsSuccess: false,
    questionsData: null,
    error: null,
    sessionError: null,
};

export function FetchQuestionsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_QUESTIONS_PENDING:
            return {
                ...state,
                questionsPending: true,
            };
        case FETCH_QUESTIONS_SUCCESS:
            return {
                ...state,
                questionsPending: false,
                questionsData: action.questions,
            };
        case FETCH_QUESTIONS_ERROR:
            return {
                ...state,
                questionsPending: false,
                error: action.error,
            };
        case SESSION_EXPIRED_ERROR:
            return {
                ...state,
                questionsPending: false,
                sessionError: action.sessionError,
            };
        default:
            return state;
    }
}
