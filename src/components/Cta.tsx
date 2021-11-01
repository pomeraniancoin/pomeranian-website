import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Image,
} from '@chakra-ui/react';
import logo from '../assets/logo.svg';

export default function CTA() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 12, md: 20 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            The latest and cutest <br />
            <Text as={'span'} color={'orange.400'}>
              dog coin
            </Text>
          </Heading>
        <Image src={logo} h={{ base: '24', md: '36' }}/>
          <Text color={'gray.500'}>
            Pomeranian is a community-based meme dog coin which aims to solve
            the lack of cute dogs on Binance Smart Chain. The coin is fairly
            launched with a small market cap, preventing any kind of trickery by
            the team and giving it complete upside potential 🚀
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Button colorScheme={'green'} rounded={'full'} px={6} mb="8">
              Join the $POM sale
            </Button>
            <Button colorScheme={'twitter'} rounded={'full'} px={6}>
              Follow us on twitter
            </Button>
            <Button colorScheme={'telegram'} rounded={'full'} px={6}>
              Join us on telegram
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
