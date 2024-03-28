"use client"

import { FormEvent, useEffect, useState } from "react";
import DisplayQuiz from './DisplayQuiz';

const QuizSelector = () => {

    const [category, setCategory] = useState<string>('');
    const [quiz, setQuestions] = useState<QuizSet>({ topic: '', questions: [] });

    const onInputChange = async (value: string) => {
        setCategory(value);
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const data: Response = await fetch(`/api/quiz/swe?category=${category}`);
        let jsondata: genAIQuiz = await data.json();
        quiz.topic = jsondata?.quiz_set?.topic || '';
        quiz.questions = jsondata?.quiz_set?.questions || [];
        setQuestions(quiz);
    }

    return (quiz.questions.length ? <DisplayQuiz {...quiz} /> :
        <div className="flex flex-row min-h-screen justify-center items-center">
            <div className="ring">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Category"
                            onChange={(e) => onInputChange(e.target.value)}
                        />
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg> */}
                    </label>
                    <button disabled={category.length < 2} type='submit' className="btn btn-md text-sm ml-2">Search</button>

                </form>
            </div>
        </div>
    )
}

export default QuizSelector;