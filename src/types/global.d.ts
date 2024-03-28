export { }

declare global {
    type NewQuiz = {
        question: string,
        type?: string,
        correctAnswer: string,
        explanation?: string,
        options?: Array,
        creator?: string
    }

    type QuizSet = {
        topic: string,
        questions: Array<string>
    }

    type genAIQuiz = {
        quiz_set: QuizSet
    }
}
