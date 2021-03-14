import { Box, Image } from '@chakra-ui/react'

const Frontpage = () => {
    // react hook
    const [location, setLocation] = useState('');

    // to handle location change
    const handleChange = (e) => setLocation(e.target.value)

    return (
        <Box>
            <Image></Image>
        </Box>
    );
}