import { Box, Button, CircularProgress, Flex, FormControl, FormLabel, Heading, Icon, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/core";
import { useState } from 'react';
import ErrorMessage from "../components/ErrorMessage";
import { userLogin } from "../utils/mockApi";
const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleSubmit = async event => {
        event.preventDefault();
        setIsLoading(true);
        try{
            await userLogin({email, password});
            setIsLoading(false);
            setIsLoggedIn(true);
        }catch(error){
            setError('Invalid Username or password');
            setIsLoading(false);
            setEmail('');
            setPassword('');
        }
    }
    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <Flex width="full" align="center" justifyContent="center">
            <Box p={8} maxWidth="500px" borderWidth={1}  borderRadius={8} boxShadow="lg">
                { isLoggedIn ? (
                    <Box textAlign="center">
                        <Text>{email} logged in !</Text>
                        <Button
                        variantColor="orange"
                        variant="outline"
                        width="full"
                        mt={4}
                        onClick={()=> setIsLoggedIn(false)}>
                            Sign Out
                        </Button>
                    </Box>
                ) : (
                    <>
                    <Box textAlign="center">
                    <Heading>Login</Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form onSubmit={handleSubmit}>
                        { error && <ErrorMessage message={error}/>}
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="indo@ganteng.com" size="lg" onChange={event => setEmail(event.currentTarget.value)} />
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                            <Input type={showPassword ? 'text' : 'password'} placeholder="**********" size="lg"  onChange={event => setPassword(event.currentTarget.value)}/>
                            <InputRightElement width="3rem">
                                <Button h="1.5rem" size="sm" onClick={handlePasswordVisibility}>
                                    {showPassword ? <Icon name="view-off"/>: <Icon name="view"/>}
                                </Button>
                            </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Button  mt={4} type="submit" variantColor="teal" variant="outline" width="full">
                            {
                                isLoading ? (
                                    <CircularProgress isIndeterminate size="24px" color="teal"/>
                                ):(
                                    'Sign In'
                                )
                            }
                        </Button>
                    </form>
                </Box>
                </>
                )}
            </Box>
        </Flex>
    );
}
 
export default LoginForm;