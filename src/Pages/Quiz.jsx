import { Box, Button, Stack, Text, background } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const navigate = useNavigate()
  const handleNextQuestion =()=>{
    navigate("/leaderboard")
  };
  
  const setQuiz = async() => {
      try {
          const question = JSON.parse(sessionStorage.getItem("user-data"));
          const category = question.category;
          const data = await axios.get(`url`)
          setData(data.data)
        } catch (error) {
            console.error(error);
        }
    };
    console.log(data)
    
    useEffect(() => {     
        setQuiz();
    }, []);
    
    return (
        <Box>
      {data.map((e , index)=>(
          <Quiz e={e} key={index}/>
      ))}
      <Stack>
      <Button onClick={handleNextQuestion}>Submit</Button>
      </Stack>
    </Box>
  );
};

export default QuizPage;

const Quiz = (e) => {
    const [bg1, setBg1] = useState("");
    const [bg2, setBg2] = useState("");
    const [bg3, setBg3] = useState("");
    const [bg4, setBg4] = useState("");
    const [select, setSelect] = useState(0);
    e=e.e
    console.log(e)
  return (
    <Box>
        <Stack>
            <Text mb={5}>{e.question}</Text>
            <button onClick={()=>{
                    setSelect(0);
                    setBg1('pink');
                }} style={{border:'1px solid black',  background:bg1}}>
                {e.correct_answer}
            </button>
            <button onClick={()=>{
                    setSelect(0);
                    setBg2('red');
                }} style={{border:'1px solid black', background:bg2}}>
                {e.incorrect_answers[1]}
            </button>
            <button onClick={() =>{
                    setSelect(0);
                    setBg3('red');
                }} style={{border:'1px solid black', background:bg3}}>
                {e.incorrect_answers[0]}
            </button>
            <button onClick={() => {
                    setSelect(0);
                    setBg4('red');
                }} style={{border:'1px solid black', background:bg4}}>
                {e.incorrect_answers[2]}
            </button>
        </Stack>
    </Box>
  );
};