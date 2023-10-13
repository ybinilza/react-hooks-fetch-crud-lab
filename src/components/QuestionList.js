import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  function handleDeletedQuestion(id) {
    const updatedQuestions = questions.filter((question) => {
      return question.id != id;
    });
    setQuestions(updatedQuestions);
  }

  const questionList = questions.map((question) => {
    return (
      <QuestionItem
        key={question.id}
        question={question}
        handleDeletedQuestion={handleDeletedQuestion}
      ></QuestionItem>
    );
  });

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((resp) => resp.json())
      .then((question) => setQuestions(() => question));
  }, []);
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList}</ul>
    </section>
  );
}

export default QuestionList;