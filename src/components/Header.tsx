import { Box, Container, Flex, Link, Image } from '@chakra-ui/react'
import { Phone } from 'lucide-react'

export default function Header() {
  return (
    <Box
      as="header"
      bg="linear-gradient(90deg, #2e4392 0%, #11a2d7 100%)"
      py={{ base: 3, md: 4 }}
      position="relative"
      zIndex={10}
    >
      <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }}>
        <Flex
          justify="space-around"
          align="center"
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 3, md: 0 }}
        >
          {/* Logo Todagente */}
          <Box flexShrink={0}>
            <Image
              src="https://todagentetelemedicina.com/wp-content/uploads/2025/05/TODAGENTE-LOGO-branco-a-claro-2048x729.png"
              alt="Todagente Telemedicina"
              h={{ base: '45px', md: '75px' }}
              objectFit="contain"
            />
          </Box>

          {/* Logos Institucionais */}

          <Link
              href='https://todagentetelemedicina.com/wp-content/uploads/2025/08/SantosLotti_Ficha-de-Operacao.pdf'
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/logos-institucionais.jpg"
                alt="Norte 2020, Portugal 2030, União Europeia"
                h={{ base: '30px', md: '42px' }}
                w={{ base: '100%', md: '100%' }}
                objectFit="contain"
                borderRadius="25px"
              />
            </Link>


          {/* Botão Telefone */}
          <Link
            href="tel:+351937097574"
            display="flex"
            alignItems="center"
            gap={2.5}
            bg="#2e4392"
            color="white"
            px={{ base: 5, md: 7 }}
            py={{ base: 2.5, md: 3.5 }}
            borderRadius="50px"
            fontWeight="600"
            fontSize={{ base: 'sm', md: 'md' }}
            transition="all 0.3s"
            boxShadow="0 2px 8px rgba(0,0,0,0.1)"
            textDecoration="none"
            _hover={{
              transform: 'scale(1.05)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              textDecoration: 'none'
            }}
          >
            <Box
              as="span"
              w={{ base: '24px', md: '28px' }}
              h={{ base: '24px', md: '28px' }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="white"
              borderRadius="full"
            >
              <Phone size={16} strokeWidth={2.5} color="#2e4392" />
            </Box>
            +351 937097574
          </Link>
        </Flex>
      </Container>
    </Box>
  )
}
