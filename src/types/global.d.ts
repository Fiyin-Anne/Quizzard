export { }

declare global { // create globally accessible types
    type NewQuiz = {
        quetsion: string,
        type: string,
        correctAnswer: string,
        explanation?: string,
        options?: Array,
        creator?: string
    }
}
