import React, { useState } from 'react'
import { Box, Button, Center, Flex, Input, Select, Stack } from '@chakra-ui/react'
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
    <Center h={'80vh'}>
        <Box justifyContent={'center'} alignItems={'center'} boxShadow ='rgba(0, 0, 0, 0.35) 0px 2px 10px' borderRadius={10} >
            <Flex flexDirection={'column'} alignItems={'center'} gap={5} p={10}>
                <Input w={'50vh'} placeholder='Enter Your Name' type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
                    <Stack>
                        <Select w={'50vh'} variant='outline' placeholder='Select Category' onChange={(e)=>setCategory(e.target.value)}>
                        <option value='General Knowledge'>General Knowledge</option>
                        <option value='Sports'>Sports</option>
                        <option value='Geography'>Geography</option>
                        </Select>
                        <Select w={'50vh'} placeholder='Select Difficulty' onChange={(e)=>setLevel(e.target.value)}>
                        <option value='Easy'>Easy</option>
                        <option value='Mideum'>Medium</option>
                        <option value='Hard'>Hard</option>
                        </Select>
                        <Select w={'50vh'} placeholder='Choose Number Of Questions' onChange={(e)=>setNumberOfQuestion(e.target.value)}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        </Select>
                    </Stack>
                <Flex alignItems={'self-start'} justifyContent={'left'} mr={20} mb={-3}>
                </Flex>
                <Button w={'40vh'} colorScheme='pink' onClick={handleSubmit} >START QUIZ</Button>
            </Flex>
        </Box>
    </Center>
  )
}

export default Home