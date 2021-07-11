export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR';
export const FETCH_QUESTIONS_PENDING = 'FETCH_QUESTIONS_PENDING';
export const SESSION_EXPIRED_ERROR = 'SESSION_EXPIRED_ERROR';


export function fetchQuestionsPending() {
    return {
        type: FETCH_QUESTIONS_PENDING
    }
}

export function fetchQuestionsSuccess(questions) {
    return {
        type: FETCH_QUESTIONS_SUCCESS,
        questions: questions,
    }
}

export function fetchQuestionsError(error) {
    return {
        type: FETCH_QUESTIONS_ERROR,
        error: error
    }
}

export function sessionExpiredError(sessionError) {
    return {
        type: SESSION_EXPIRED_ERROR,
        sessionError: sessionError
    }
}