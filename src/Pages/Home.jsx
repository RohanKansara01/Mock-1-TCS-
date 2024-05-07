import React, { useState } from 'react'
import { Box, Button, Input, Select, Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

     const navigate = useNavigate();

     const [name, setName] = useState("");
     const [category, setCategory] = useState("");
     const [level, setLevel] = useState("");
     const [numberOfQuestion, setNumberOfQuestion] = useState(3);

     const handleSubmit=()=>{
        const user = {
            name,
            category,
            level,
            numberOfQuestion
        }

        sessionStorage.setItem("user-data", JSON.stringify(user));
        //console.log(user)

        navigate("/quiz")
      }
  return (
    <Box>
      <Input placeholder='Enter Your Name' type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      
      <Stack>
        <Select placeholder='Select Category' onChange={(e)=>setCategory(e.target.value)}>
         <option value='General Knowledge'>General Knowledge</option>
         <option value='Sports'>Sports</option>
         <option value='Geography'>Geography</option>
        </Select>
        <Select placeholder='Select Difficulty' onChange={(e)=>setLevel(e.target.value)}>
        <option value='Easy'>Easy</option>
        <option value='Mideum'>Medium</option>
        <option value='Hard'>Hard</option>
        </Select>
        <Select placeholder='Choose Number Of Questions' onChange={(e)=>setNumberOfQuestion(e.target.value)}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        </Select>
      </Stack>

      <Button colorScheme='pink' onClick={handleSubmit} >START QUIZ</Button>
    </Box>
  )
}

export default Home