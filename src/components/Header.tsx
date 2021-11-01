import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Spacer,
  Image,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import logo from '../assets/logo.svg';

const Links = [
  { title: 'Buy', url: '' },
  { title: 'Tokenomics', url: '#tokenomics' },
  { title: 'FAQ', url: '#faq' },
];

const NavLink = ({ children, url }: { children: ReactNode, url: string }) => (
  <Link
    px={3}
    py={2}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={url}
  >
    {children}
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} as="header">
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-around'}
          w="full"
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={'center'}
            justifyContent="center"
            maxW="6xl"
            w="full"
          >
            <Flex w="full" display={{ base: 'none', md: 'flex' }}>
              <Image src={logo} h="12"/>
            </Flex>
            <Spacer></Spacer>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink url={link.url} key={link.title}>{link.title}</NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink url={link.url} key={link.title}>{link.title}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Header;
