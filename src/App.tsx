import * as React from 'react';
import {
  ChakraProvider,
  Box,
  Image,
  Heading,
  VStack,
  Flex,
  Center,
  theme,
  Text,
} from '@chakra-ui/react';
import Header from './components/Header';
import CTA from './components/Cta';
import tokenomics from './assets/tokenomics.png';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box minH="100vh" pb="32">
      <Header></Header>
      <Center w="full">
        <VStack maxW="5xl" w="full">
          <CTA></CTA>
          <Flex direction="row" justifyContent="space-between" w="full">
            <Center w="full">
              <VStack w="full">
                <Heading
                  py="6"
                  id="tokenomics"
                  fontWeight={600}
                  fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                  lineHeight={'110%'}
                >
                  Tokenomics
                </Heading>
                <VStack pt="10" w="full" maxW="3xl" alignItems="flex-start">
                  <Text pb="4">
                    The team will NOT have any tokens at all. All the tokens
                    will be sold during the fair launch, and a portion of the
                    initial supply will be locked as liquidity FOREVER. The
                    unsold supply will be burned, increasing the value of the
                    sold tokens.
                  </Text>
                  <Text>Total supply: 100.000.000.000 $POM</Text>
                  <Text>Team premine: 0 $POM</Text>
                  <Text>Minimum market cap at launch: 25k $</Text>
                  <Text>Maximum market cap at launch: 80k $</Text>
                  <Center w="full" pt="10">
                    <Image src={tokenomics}></Image>
                  </Center>
                </VStack>
                <Heading
                  pt="20"
                  id="faq"
                  fontWeight={600}
                  fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                  lineHeight={'110%'}
                >
                  FAQ
                </Heading>
                <VStack pt="14" w="full" maxW="3xl" alignItems="flex-start">
                <Heading
                color={'orange.400'}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                  line>
                    What is Pomeranian?
                  </Heading>
                  <Text pt="4">
                  Pomeranian (POM) is an ERC-20 token on the Binance Smart Chain blockchain. Can also be classified as a meme coin as well as a social experiment with tokenomics.
                  </Text>
                  <Heading
                  pt="10"
                color={'orange.400'}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                  line>
                    Why Binance Smart Chain?
                  </Heading>
                  <Text pt="4">
                  Binance Smart Chain was a clear choice from the start for two simple reasons: it has a big community and the fees are very low, so everyone can enjoy and use the token however they wish, maybe building an ecosystem on top of it 😉.
                  </Text>
                  <Heading
                  pt="10"
                color={'orange.400'}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                  line>
                    When moon?
                  </Heading>
                  <Text pt="4">
                  The question we all want to know the answer. Depends on the community, but lately cute dogs are used to moon rides 🚀🔥.
                  </Text>
                  <Heading
                  pt="10"
                color={'orange.400'}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                  line>
                   Will the team sell their $POM?
                  </Heading>
                  <Text pt="4">
                    No, the team will have no $POM after launch. In fact, the team will market buy $POM after launch with some of the funds raised in order to incentivize price action and reward presale supporters.
                  </Text>
                  <Heading
                  pt="10"
                color={'orange.400'}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                  line>
                    What is the market cap of Pomeranian?
                  </Heading>
                  <Text pt="4">
                  At launch, the market cap will be between 25 - 80k $. After that, the market will decide the fair price for the token, feel free to check it on an explorer.
                  </Text>
                </VStack>
              </VStack>
            </Center>
          </Flex>
        </VStack>
      </Center>
    </Box>
  </ChakraProvider>
);
