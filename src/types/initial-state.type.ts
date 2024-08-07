import { Answer } from '../_domain/answer.type.ts';
import { QuestionsState } from './question-state.type.ts';

export type InitialState = {
    loading: boolean;
    questions: QuestionsState[];
    currentQuestionNumber: number;
    userAnswers: Answer[];
    score: number;
    gameOver: boolean;
    error: string | null;
};
