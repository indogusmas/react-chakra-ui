import { Alert, AlertDescription, AlertIcon, Box } from "@chakra-ui/core";

const ErrorMessage = ({message}) => {
    return (  
        <Box>
            <Alert status="error" borderRadius={4}>
                <AlertIcon/>
                <AlertDescription>
                    {message}
                </AlertDescription>
            </Alert>
        </Box>
    );
}
 
export default ErrorMessage;