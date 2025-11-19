import { Box, Container, Grid, Heading, Text, Button, VStack, HStack, Link, Image } from '@chakra-ui/react'
import { Check, Instagram, Plus, Youtube } from 'lucide-react'
import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'

// Componente FAQ Item
function FAQItem({ question, answer }: { question: string; answer?: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Box
      bg="rgba(91, 136, 214, 0.3)"
      borderRadius="8px"
      overflow="hidden"
      border="1px solid rgba(255, 255, 255, 0.2)"
    >
      <Button
        w="100%"
        h="auto"
        py={4}
        px={5}
        bg="transparent"
        color="white"
        fontSize={{ base: 'sm', md: 'md' }}
        fontWeight="600"
        textAlign="left"
        justifyContent="space-between"
        borderRadius="0"
        transition="all 0.3s"
        _hover={{ bg: 'rgba(255, 255, 255, 0.1)' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <HStack gap={3} flex={1} align="flex-start">
          <Plus
            size={20}
            style={{
              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s'
            }}
          />
          <Text flex={1} wordBreak="break-word">{question}</Text>
        </HStack>
      </Button>
      {isOpen && answer && (
        <Box
          px={5}
          py={4}
          bg="rgba(255, 255, 255, 0.05)"
          color="white"
          fontSize={{ base: 'sm', md: 'md' }}
          lineHeight="1.7"
          borderTop="1px solid rgba(255, 255, 255, 0.1)"
        >
          {answer}
        </Box>
      )}
    </Box>
  )
}

export default function Home() {
  // CONFIGURE AQUI: Caminhos das imagens de fundo
  const backgroundImageDesktop = '/images/hero-desktop.jpg' // Imagem de lateral (landscape)
  const backgroundImageMobile = '/images/hero-mobile.jpg'   // Imagem de pé (portrait)
  const backgroundImageCruz = '/images/fundoplano.jpg'
  return (
    <Box position="relative" overflow="hidden">
      {/* Hero Section */}
      <Box
        bg="linear-gradient(90deg, #2e4392 0%, #11a2d7 100%)"
        h={{ base: '100vh', md: 'calc(97vh - 85px)' }}
        mt={{ base: '-40%', md: '0' }}
        position="relative"
        py={{ base: 6, md: 10 }}
        backgroundImage={{
          base: `url(${backgroundImageMobile})`,
          md: `url(${backgroundImageDesktop})`
        }}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        overflow="hidden"
        display="flex"
        alignItems="center"
      >
        {/* Overlay do Gradiente sobre a imagem */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          // bg={{
          //   base: 'linear-gradient(180deg, rgba(46,67,146,0.75) 0%, rgba(17,162,215,0.65) 100%)',
          //   md: 'linear-gradient(90deg, rgba(46,67,146,0.85) 0%, rgba(17,162,215,0.65) 60%, transparent 100%)'
          // }}
          zIndex={1}
        />

        <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }} position="relative" zIndex={2} w="100%">
          <Grid
            templateColumns={{ base: '1fr', lg: '1fr' }}
            alignItems="center"
          >
            {/* Conteúdo Principal */}
            <AnimatedSection direction="up" duration={0.8}>
              <VStack
                align="flex-start"
                gap={{ base: 3, md: 4 }}
                color="white"

                maxW={{ base: '100%', md: '700px' }}
              >
                {/* Título Principal */}
                <Heading
                  as="h1"
                  fontSize={{ base: '2rem', md: '3rem', lg: '4rem' }}
                  fontWeight="300"
                  lineHeight="1.15"
                  letterSpacing="-0.02em"
                >
                  O seu{' '}
                  <Box as="span" fontWeight="700">
                    médico online
                  </Box>
                  <br />
                  <Box as="span" fontWeight="700">
                    24h por dia, 7 dias
                  </Box>
                  <br />
                  <Box as="span" fontWeight="700">
                    por semana
                  </Box>{' '}
                  <Box as="span" fontWeight="300">
                    sempre
                  </Box>
                  <br />
                  que precisar.
                </Heading>

                {/* Lista de Benefícios */}
                <VStack align="flex-start" gap={2} fontSize={{ base: 'md', md: 'lg' }} mt={1}>
                  <HStack gap={2.5}>
                    <Box
                      w="20px"
                      h="20px"
                      borderRadius="full"
                      border="2px solid white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                    >
                      <Check size={12} strokeWidth={3} color="white" />
                    </Box>
                    <Text fontWeight="400">Sem filas</Text>
                  </HStack>
                  <HStack gap={2.5}>
                    <Box
                      w="20px"
                      h="20px"
                      borderRadius="full"
                      border="2px solid white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                    >
                      <Check size={12} strokeWidth={3} color="white" />
                    </Box>
                    <Text fontWeight="400">Sem burocracia</Text>
                  </HStack>
                  <HStack gap={2.5}>
                    <Box
                      w="20px"
                      h="20px"
                      borderRadius="full"
                      border="2px solid white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                    >
                      <Check size={12} strokeWidth={3} color="white" />
                    </Box>
                    <Text fontWeight="400">Sem carência</Text>
                  </HStack>
                </VStack>

                {/* Texto do Preço */}
                <Text
                  fontSize={{ base: 'sm', md: 'md' }}
                  mt={2}
                  maxW="600px"
                  lineHeight="1.6"
                  fontWeight="400"
                >
                  E o melhor: seja atendido em até 10 minutos, a partir de €6,99/mês.
                </Text>

                {/* Botão CTA */}
                <Button
                  size="lg"
                  bg="rgba(46, 67, 146, 0.6)"
                  color="white"
                  border="2.5px solid white"
                  px={{ base: 6, md: 10 }}
                  py={{ base: 4, md: 5 }}
                  h="auto"
                  fontSize={{ base: 'sm', md: 'md' }}
                  fontWeight="700"
                  borderRadius="50px"
                  mt={2}
                  transition="all 0.3s"
                  textDecoration="none"
                  _hover={{
                    bg: 'white',
                    color: '#2e4392',
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                    textDecoration: 'none'
                  }}
                >
                  Quero Contratar{' '}
                  <Box
                    as="span"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    w="24px"
                    h="24px"
                    borderRadius="full"
                    border="2px solid currentColor"
                    ml={2}
                    fontSize="sm"
                    fontWeight="400"
                  >
                    →
                  </Box>
                </Button>
              </VStack>
            </AnimatedSection>
          </Grid>
        </Container>

        {/* Background Pattern Overlay Sutil */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          opacity={0.05}
          background="radial-gradient(circle at 30% 50%, rgba(255,255,255,0.4) 0%, transparent 60%)"
          pointerEvents="none"
          zIndex={1}
        />
      </Box>

      {/* Seção: Não tem tempo a perder */}
      <Box
        bg="#f5f5f5"
        py={{ base: 4, md: 6 }}
      >
        <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }}>
          <Grid
            templateColumns={{ base: '1fr', lg: '1fr 1.1fr' }}
            gap={{ base: 4, md: 6, lg: 10 }}
            alignItems="center"
          >
            {/* Coluna Esquerda - Imagens */}
            <AnimatedSection direction="left" delay={0.2}>
              <Box position="relative">
                {/* Box Azul de Fundo - Efeito Overlay */}
                <Box
                  position="absolute"
                  top={{ base: '8%', md: '10%' }}
                  left={{ base: '-5%', md: '-8%' }}
                  w={{ base: '75%', md: '70%' }}
                  h={{ base: '65%', md: '60%' }}
                  bg="linear-gradient(135deg, #11a2d7 0%, #2e4392 100%)"
                  borderRadius="20px"
                  zIndex={0}
                  boxShadow="0 8px 30px rgba(46, 67, 146, 0.25)"
                />

                <VStack gap={{ base: 2, md: 3 }} align="stretch" position="relative" zIndex={1}>
                  {/* Imagem Maior - Topo */}
                  <Box
                    borderRadius="20px"
                    overflow="hidden"
                    boxShadow="0 4px 20px rgba(0,0,0,0.1)"
                    maxH={{ base: '240px', md: '300px', lg: '340px' }}
                  >
                    <Image
                      src="/images/medico-laptop.jpg"
                      alt="Médico trabalhando no laptop"
                      w="100%"
                      h="100%"
                      objectFit="cover"
                    />
                  </Box>

                  {/* Imagem Menor - Embaixo */}
                  <Box
                    borderRadius="20px"
                    overflow="hidden"
                    boxShadow="0 4px 20px rgba(0,0,0,0.1)"
                    maxW={{ base: '100%', md: '85%' }}
                    maxH={{ base: '180px', md: '220px', lg: '250px' }}
                    ml={{ base: 0, md: 'auto' }}
                  >
                    <Image
                      src="/images/medico-teleconsulta.jpg"
                      alt="Médico oferecendo teleconsulta"
                      w="100%"
                      h="100%"
                      objectFit="cover"
                    />
                  </Box>
                </VStack>
              </Box>
            </AnimatedSection>

            {/* Coluna Direita - Texto */}
            <AnimatedSection direction="right" delay={0.3}>
              <VStack align="flex-start" gap={{ base: 2, md: 3 }} color="#333">
                {/* Título */}
                <Heading
                  as="h2"
                  fontSize={{ base: '1.5rem', md: '2rem', lg: '2.5rem' }}
                  fontWeight="700"
                  lineHeight="1.2"
                  color="#1a1a1a"
                >
                  Não tem tempo a perder,
                  <br />
                  <Box as="span" color="#2e4392">
                    e a sua saúde também não.
                  </Box>
                </Heading>

                {/* Parágrafos */}
                <VStack align="flex-start" gap={2} fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.6">
                  <Text color="#555">
                    Acorda com uma dor incómoda, liga para o centro de saúde e escuta: "Há vaga só para a próxima semana".
                  </Text>

                  <Text color="#555">
                    Pensa que vai passar, mas o incómodo não passa.
                  </Text>

                  <Text color="#555">
                    Quando decide ir às urgências, tem de esperar para ser atendido. Sente-se mal, mas espera.
                  </Text>

                  <Text color="#555">
                    Não tem resposta, deixa as urgências com mais dúvidas do que quando entrou.
                  </Text>

                  <Text color="#555">
                    Se fosse com seu filho, pior ainda: o medo aumenta.
                  </Text>

                  <Text color="#555">
                    A ansiedade cresce e tudo o que queria era alguém preparado para me atender imediatamente, mas não há ninguém.
                  </Text>
                </VStack>
              </VStack>
            </AnimatedSection>
          </Grid>
        </Container>
      </Box>


      {/* Seção: E se o cuidado começasse antes */}
      <Box
        py={{ base: 6, md: 10 }}
        position="relative"
        backgroundImage={{
          base: `url(${backgroundImageCruz})`,
          md: `url(${backgroundImageCruz})`
        }}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        {/* Overlay branco semi-transparente */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(242, 242, 242, 0.33)"
          zIndex={1}
        />

        <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }} position="relative" zIndex={2}>
          <AnimatedSection direction="up" delay={0.1}>
            <VStack gap={{ base: 4, md: 6 }} align="center" textAlign="center" mb={{ base: 6, md: 10 }}>
              {/* Título Principal */}
              <Heading
                as="h2"
                fontSize={{ base: '1.75rem', md: '2.5rem', lg: '3rem' }}
                fontWeight="700"
                lineHeight="1.2"
                color="#2e4392"
                maxW="900px"
              >
                E se o cuidado começasse antes mesmo da dor piorar?
              </Heading>

              {/* Subtítulos */}
              <VStack gap={1}>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="#555" fontWeight="400">
                  Afinal, a vida não espera.
                </Text>
                <Text fontSize={{ base: 'lg', md: 'xl' }} color="#2e4392" fontWeight="700">
                  O seu corpo também não.
                </Text>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="#555" fontWeight="400">
                  Antes esperava, agora resolve.
                </Text>
              </VStack>
            </VStack>
          </AnimatedSection>

          {/* Grid de Comparação */}
          <Grid
            templateColumns={{ base: '1fr', md: '1fr 1fr' }}
            gap={{ base: 4, md: 6, lg: 8 }}
            maxW="1100px"
            mx="auto"
          >
            {/* Coluna Esquerda - Sem Toda Gente */}
            <AnimatedSection direction="left" delay={0.2}>
              <Box
                bg="white"
                p={{ base: 6, md: 8 }}
                borderRadius="20px"
                boxShadow="0 4px 15px rgba(0,0,0,0.08)"
                h="100%"
                display="flex"
                flexDirection="column"
              >
                <Heading
                  as="h3"
                  fontSize={{ base: 'xl', md: '2xl' }}
                  fontWeight="700"
                  color="#2e4392"
                  mb={4}
                >
                  Sem Toda Gente
                </Heading>
                <VStack align="flex-start" gap={3} fontSize={{ base: 'sm', md: 'md' }} color="#555">
                  <HStack align="flex-start" gap={2}>
                    <Text color="#2e4392" fontWeight="700" flexShrink={0}>–</Text>
                    <Text>Excesso de burocracia.</Text>
                  </HStack>
                  <HStack align="flex-start" gap={2}>
                    <Text color="#2e4392" fontWeight="700" flexShrink={0}>–</Text>
                    <Text>Deslocamento até Hospital.</Text>
                  </HStack>
                  <HStack align="flex-start" gap={2}>
                    <Text color="#2e4392" fontWeight="700" flexShrink={0}>–</Text>
                    <Text>Sem receita, sem solução.</Text>
                  </HStack>
                  <HStack align="flex-start" gap={2}>
                    <Text color="#2e4392" fontWeight="700" flexShrink={0}>–</Text>
                    <Text>Tempo de espera elevado.</Text>
                  </HStack>
                  <HStack align="flex-start" gap={2}>
                    <Text color="#2e4392" fontWeight="700" flexShrink={0}>–</Text>
                    <Text>Custos elevados.</Text>
                  </HStack>
                </VStack>
              </Box>
            </AnimatedSection>

            {/* Coluna Direita - Com Toda Gente */}
            <AnimatedSection direction="right" delay={0.3}>
              <Box
                bg="white"
                p={{ base: 6, md: 8 }}
                borderRadius="20px"
                boxShadow="0 4px 15px rgba(0,0,0,0.08)"
                h="100%"
                display="flex"
                flexDirection="column"
              >
                <Heading
                  as="h3"
                  fontSize={{ base: 'xl', md: '2xl' }}
                  fontWeight="700"
                  color="#2e4392"
                  mb={4}
                >
                  Com Toda Gente
                </Heading>
                <VStack align="flex-start" gap={3} fontSize={{ base: 'sm', md: 'md' }} color="#555">
                  <HStack align="flex-start" gap={2}>
                    <Text color="#2e4392" fontWeight="700" flexShrink={0}>–</Text>
                    <Text>Médico 24h sempre que precisar.</Text>
                  </HStack>
                  <HStack align="flex-start" gap={2}>
                    <Text color="#2e4392" fontWeight="700" flexShrink={0}>–</Text>
                    <Text>Sem sair de casa. Sem fila.</Text>
                  </HStack>
                  <HStack align="flex-start" gap={2}>
                    <Text color="#2e4392" fontWeight="700" flexShrink={0}>–</Text>
                    <Text>Médicos Certificados em Portugal.</Text>
                  </HStack>
                  <HStack align="flex-start" gap={2}>
                    <Text color="#2e4392" fontWeight="700" flexShrink={0}>–</Text>
                    <Text>Receitas enviadas por e-mail e SMS.</Text>
                  </HStack>
                  <HStack align="flex-start" gap={2}>
                    <Text color="#2e4392" fontWeight="700" flexShrink={0}>–</Text>
                    <Text>Prático, rápido e resolutivo.</Text>
                  </HStack>
                  <HStack align="flex-start" gap={2}>
                    <Text color="#2e4392" fontWeight="700" flexShrink={0}>–</Text>
                    <Text>Valor extraordinariamente acessível.</Text>
                  </HStack>
                </VStack>
              </Box>
            </AnimatedSection>
          </Grid>
        </Container>
      </Box>

      {/* Seção: O que muda em sua vida */}
      <Box
        bg="#ffffff"
        py={{ base: 6, md: 10 }}
      >
        <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }}>
          <Grid
            templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
            gap={{ base: 6, md: 8, lg: 12 }}
            alignItems="center"
          >
            {/* Coluna Esquerda - Texto */}
            <AnimatedSection direction="left" delay={0.2}>
              <VStack align="flex-start" gap={{ base: 3, md: 4 }} color="#333">
                {/* Título */}
                <Heading
                  as="h2"
                  fontSize={{ base: '1.75rem', md: '2.25rem', lg: '2.75rem' }}
                  fontWeight="700"
                  lineHeight="1.2"
                  color="#2e4392"
                >
                  O que muda em sua vida com Toda Gente?
                </Heading>

                {/* Lista de Benefícios com Check */}
                <VStack align="flex-start" gap={2} fontSize={{ base: 'md', md: 'lg' }} mt={2}>
                  <HStack gap={2.5}>
                    <Box
                      w="24px"
                      h="24px"
                      borderRadius="full"
                      border="2px solid #2e4392"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                    >
                      <Check size={14} strokeWidth={3} color="#2e4392" />
                    </Box>
                    <Text fontWeight="400" color="#555">
                      Ganha <Box as="span" fontWeight="700">tempo</Box>
                    </Text>
                  </HStack>
                  <HStack gap={2.5}>
                    <Box
                      w="24px"
                      h="24px"
                      borderRadius="full"
                      border="2px solid #2e4392"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                    >
                      <Check size={14} strokeWidth={3} color="#2e4392" />
                    </Box>
                    <Text fontWeight="400" color="#555">
                      Tem <Box as="span" fontWeight="700">clareza</Box>
                    </Text>
                  </HStack>
                  <HStack gap={2.5}>
                    <Box
                      w="24px"
                      h="24px"
                      borderRadius="full"
                      border="2px solid #2e4392"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                    >
                      <Check size={14} strokeWidth={3} color="#2e4392" />
                    </Box>
                    <Text fontWeight="400" color="#555">
                      Tem <Box as="span" fontWeight="700">acolhimento</Box>
                    </Text>
                  </HStack>
                </VStack>

                {/* Parágrafos */}
                <VStack align="flex-start" gap={3} fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7" mt={2}>
                  <Text color="#555">
                    Quando dizemos "temos médicos disponíveis 24h", significa que tem alívio imediato e com segurança.
                  </Text>
                  <Text color="#555">
                    Com Toda Gente, temos médicos que o acompanha de verdade.
                  </Text>
                  <Text color="#555">
                    Que conhece seu histórico.
                  </Text>
                  <Text color="#555">
                    Que responde rapidamente.
                  </Text>
                  <Text color="#555">
                    Que está à sua disposição.
                  </Text>
                  <Text color="#2e4392" fontWeight="700" fontSize={{ base: 'md', md: 'lg' }} mt={2}>
                    É como ter um consultório no telemóvel.
                  </Text>
                </VStack>
              </VStack>
            </AnimatedSection>

            {/* Coluna Direita - Imagens */}
            <AnimatedSection direction="right" delay={0.3}>
              <Box position="relative" display={{ base: 'none', lg: 'block' }} minH="600px">
                {/* Imagem Maior - Mulher no Telefone (Superior Direita) */}
                <Box
                  position="absolute"
                  top={0}
                  right={0}
                  w="75%"
                  borderRadius="20px"
                  overflow="hidden"
                  boxShadow="0 4px 20px rgba(0,0,0,0.1)"
                  zIndex={1}
                >
                  <Image
                    src="https://todagentetelemedicina.com/wp-content/uploads/2025/05/img-sessao-9.webp"
                    alt="Mulher ao telefone"
                    w="100%"
                    h="auto"
                    objectFit="cover"
                  />
                </Box>

                {/* Imagem Menor - Pediatra (Inferior Esquerda, sobreposta) */}
                <Box
                  position="absolute"
                  bottom="10%"
                  left={0}
                  w="60%"
                  borderRadius="20px"
                  overflow="hidden"
                  boxShadow="0 6px 25px rgba(0,0,0,0.15)"
                  zIndex={2}
                >
                  <Image
                    src="https://todagentetelemedicina.com/wp-content/uploads/2025/05/pediatra-negra-falando-por-videochamada-com-mae-que-esta-dando-terapia-de-inalacao-a-filha-em-casa-scaled.jpg"
                    alt="Pediatra em videochamada"
                    w="100%"
                    h="auto"
                    objectFit="cover"
                  />
                </Box>
              </Box>
            </AnimatedSection>

            {/* Versão Mobile das Imagens */}
            <AnimatedSection direction="up" delay={0.2}>
              <VStack gap={4} display={{ base: 'flex', lg: 'none' }}>
                <Box borderRadius="20px" overflow="hidden" boxShadow="0 4px 20px rgba(0,0,0,0.1)">
                  <Image
                    src="https://todagentetelemedicina.com/wp-content/uploads/2025/05/img-sessao-9.webp"
                    alt="Mulher ao telefone"
                    w="100%"
                    h="auto"
                    objectFit="cover"
                  />
                </Box>
                <Box borderRadius="20px" overflow="hidden" boxShadow="0 4px 20px rgba(0,0,0,0.1)">
                  <Image
                    src="https://todagentetelemedicina.com/wp-content/uploads/2025/05/pediatra-negra-falando-por-videochamada-com-mae-que-esta-dando-terapia-de-inalacao-a-filha-em-casa-scaled.jpg"
                    alt="Pediatra em videochamada"
                    w="100%"
                    h="auto"
                    objectFit="cover"
                  />
                </Box>
              </VStack>
            </AnimatedSection>
          </Grid>
        </Container>
      </Box>

      {/* Container das Seções Grudadas */}
      <Box position="relative">
        {/* Seção 5 - Parte 1: Tem acesso a */}
        <Box
          py={{ base: 8, md: 12, lg: 14 }}
          pb={{ base: 8, md: 48, lg: 52 }}
          position="relative"
          backgroundImage={{
            base: `url(/images/fundoaparelho.jpg)`,
            md: `url(/images/fundoaparelho.jpg)`
          }}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        >
          {/* Overlay azul semi-transparente */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(78, 99, 173, 0.49)"
            zIndex={1}
          />

          <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }} position="relative" zIndex={2}>
            <AnimatedSection direction="up" delay={0.1}>
              <VStack gap={{ base: 5, md: 7 }} align="center" textAlign="center" color="white">
                {/* Título */}
                <Heading
                  as="h2"
                  fontSize={{ base: '2rem', md: '2.75rem', lg: '3.25rem' }}
                  fontWeight="700"
                  lineHeight="1.2"
                >
                  Tem acesso a:
                </Heading>

                {/* Lista de Benefícios */}
                <VStack
                  gap={{ base: 4, md: 5 }}
                  align="flex-start"
                  fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                  maxW="900px"
                  w="100%"
                >
                  {/* Item 1 */}
                  <HStack gap={3} align="flex-start">
                    <Box
                      w={{ base: '20px', md: '24px' }}
                      h={{ base: '20px', md: '24px' }}
                      borderRadius="full"
                      border="2px solid white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                      mt={1}
                    >
                      <Check size={14} strokeWidth={3} color="white" />
                    </Box>
                    <Text textAlign="left">
                      Consultas <Box as="span" fontWeight="700">ilimitadas</Box> com médicos 24h – índice de resolutividade acima de 90%.
                    </Text>
                  </HStack>

                  {/* Item 2 */}
                  <HStack gap={3} align="flex-start">
                    <Box
                      w={{ base: '20px', md: '24px' }}
                      h={{ base: '20px', md: '24px' }}
                      borderRadius="full"
                      border="2px solid white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                      mt={1}
                    >
                      <Check size={14} strokeWidth={3} color="white" />
                    </Box>
                    <Text textAlign="left">
                      Atendimento médico <Box as="span" fontWeight="700">24h por dia, 7 dias</Box> por semana – inclusive aos fins de semana e feriados.
                    </Text>
                  </HStack>

                  {/* Item 3 */}
                  <HStack gap={3} align="flex-start">
                    <Box
                      w={{ base: '20px', md: '24px' }}
                      h={{ base: '20px', md: '24px' }}
                      borderRadius="full"
                      border="2px solid white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                      mt={1}
                    >
                      <Check size={14} strokeWidth={3} color="white" />
                    </Box>
                    <Text textAlign="left">
                      <Box as="span" fontWeight="700">Receitas e atestado</Box> enviados por SMS ou e-mail, com validade em todo o território de Portugal.
                    </Text>
                  </HStack>

                  {/* Item 4 */}
                  <HStack gap={3} align="flex-start">
                    <Box
                      w={{ base: '20px', md: '24px' }}
                      h={{ base: '20px', md: '24px' }}
                      borderRadius="full"
                      border="2px solid white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                      mt={1}
                    >
                      <Check size={14} strokeWidth={3} color="white" />
                    </Box>
                    <Text textAlign="left">
                      Cobertura para <Box as="span" fontWeight="700">todas as idades.</Box>
                    </Text>
                  </HStack>

                  {/* Item 5 */}
                  <HStack gap={3} align="flex-start">
                    <Box
                      w={{ base: '20px', md: '24px' }}
                      h={{ base: '20px', md: '24px' }}
                      borderRadius="full"
                      border="2px solid white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                      mt={1}
                    >
                      <Check size={14} strokeWidth={3} color="white" />
                    </Box>
                    <Text textAlign="left">
                      <Box as="span" fontWeight="700">Sem exclusão</Box> por doenças pré-existentes.
                    </Text>
                  </HStack>

                  {/* Item 6 */}
                  <HStack gap={3} align="flex-start">
                    <Box
                      w={{ base: '20px', md: '24px' }}
                      h={{ base: '20px', md: '24px' }}
                      borderRadius="full"
                      border="2px solid white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink={0}
                      mt={1}
                    >
                      <Check size={14} strokeWidth={3} color="white" />
                    </Box>
                    <Text textAlign="left" fontWeight="700">
                      Sem carência. Sem burocracia.
                    </Text>
                  </HStack>
                </VStack>
              </VStack>
            </AnimatedSection>
          </Container>
        </Box>

        {/* Seção 5 - Parte 2: Sobre Nós - Mobile (Fluxo Normal) */}
        <Box
          display={{ base: 'block', md: 'none' }}
          position="relative"
          backgroundImage="url(/images/medicoatendendo.jpg)"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          py={8}
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(50, 60, 80, 0.75)"
            zIndex={1}
          />

          <Container maxW="100%" px={4} position="relative" zIndex={2}>
            <Heading
              as="h2"
              fontSize="2rem"
              fontWeight="700"
              color="white"
              textAlign="center"
              mb={6}
            >
              Sobre Nós
            </Heading>

            <VStack gap={5} align="flex-start" color="white">
              <VStack align="flex-start" gap={3}>
                <Heading as="h3" fontSize="lg" fontWeight="700">
                  Gostamos de cuidar das pessoas
                </Heading>
                <Text fontSize="sm" lineHeight="1.7">
                  Somos uma plataforma portuguesa que une a confiança de um médico 24h online com rapidez exigida no dia a dia.
                </Text>
                <Text fontSize="sm" lineHeight="1.7">
                  Nosso corpo clínico é formado por médicos que valorizam a escuta e o atendimento humanizado com o paciente.
                </Text>
              </VStack>

              <VStack align="flex-start" gap={3}>
                <Text fontSize="sm" lineHeight="1.7">
                  Nossas teleconsultas contam com 90% de índice de resolutividade e satisfação.
                </Text>
                <Text fontSize="sm" lineHeight="1.7">
                  Com médicos legalmente registados em Portugal, equipe estável e atendimento humanizado, nós cuidamos de tua saúde com{' '}
                  <Box as="span" fontWeight="700">verdade, tecnologia e presença.</Box>
                </Text>
              </VStack>
            </VStack>
          </Container>
        </Box>

        {/* Seção 5 - Parte 3: Planos */}
        <Box
          pt={{ base: 6, md: 48, lg: 52 }}
          pb={{ base: 6, md: 8 }}
          position="relative"
          // backgroundImage="url(/images/fundoplano.jpg)"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        >
          {/* Overlay azul semi-transparente */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            // bg="rgba(91, 136, 214, 0.85)"
            zIndex={1}
          />

          <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }} position="relative" zIndex={2}>
            <Grid
              templateColumns={{ base: '1fr', md: '1fr 1fr' }}
              gap={{ base: 4, md: 6 }}
              maxW="800px"
              mx="auto"
            >
              {/* Card 1 - Plano Mensal */}
              <AnimatedSection direction="up" delay={0.2}>
                <Box
                  bg="white"
                  borderRadius="15px"
                  overflow="hidden"
                  boxShadow="0 4px 20px rgba(0,0,0,0.15)"
                  h="100%"
                  display="flex"
                  flexDirection="column"
                >
                  {/* Imagem do Plano */}
                  <Box
                    h={{ base: '140px', md: '160px' }}
                    w="100%"
                    overflow="hidden"
                  >
                    <Image
                      src="/images/familia1.avif"
                      alt="Família - Plano Mensal"
                      w="100%"
                      h="100%"
                      objectFit="cover"
                    />
                  </Box>

                  {/* Conteúdo do Card */}
                  <VStack align="center" p={{ base: 4, md: 5 }} gap={2.5} flex={1}>
                    {/* Título do Plano */}
                    <Heading
                      as="h3"
                      fontSize={{ base: 'lg', md: 'xl' }}
                      fontWeight="400"
                      color="#2e4392"
                      textAlign="center"
                    >
                      Plano <Box as="span" fontWeight="700">Mensal</Box>
                    </Heading>
                    <Text fontSize={{ base: 'xs', md: 'sm' }} color="#555" fontWeight="500">
                      Recorrente No Cartão
                    </Text>

                    {/* Preço */}
                    <VStack gap={0} my={1}>
                      <Text fontSize="xs" color="#555">
                        A partir de €
                      </Text>
                      <Heading
                        as="h4"
                        fontSize={{ base: '2.5rem', md: '2.75rem' }}
                        fontWeight="700"
                        color="#2e4392"
                        lineHeight="1"
                      >
                        6,99
                        <Box as="span" fontSize={{ base: 'sm', md: 'md' }} fontWeight="400" color="#555">
                          {' '}/mês
                        </Box>
                      </Heading>
                    </VStack>

                    {/* Espaçador invisível para alinhar com o card anual */}
                    <Box minH="32px" />

                    {/* Lista de Benefícios */}
                    <VStack align="flex-start" gap={1.5} w="100%" fontSize="xs" color="#555" mt={1} flex={1}>
                      <HStack gap={1.5}>
                        <Box
                          w="14px"
                          h="14px"
                          borderRadius="full"
                          border="2px solid #2e4392"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                        >
                          <Check size={8} strokeWidth={3} color="#2e4392" />
                        </Box>
                        <Text>Valor referente a 1 pessoa</Text>
                      </HStack>
                      <HStack gap={1.5}>
                        <Box
                          w="14px"
                          h="14px"
                          borderRadius="full"
                          border="2px solid #2e4392"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                        >
                          <Check size={8} strokeWidth={3} color="#2e4392" />
                        </Box>
                        <Text>Sem carência</Text>
                      </HStack>
                      <HStack gap={1.5}>
                        <Box
                          w="14px"
                          h="14px"
                          borderRadius="full"
                          border="2px solid #2e4392"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                        >
                          <Check size={8} strokeWidth={3} color="#2e4392" />
                        </Box>
                        <Text>Fidelidade de 12 meses</Text>
                      </HStack>
                      <HStack gap={1.5}>
                        <Box
                          w="14px"
                          h="14px"
                          borderRadius="full"
                          border="2px solid #2e4392"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                        >
                          <Check size={8} strokeWidth={3} color="#2e4392" />
                        </Box>
                        <Text>Sem restrições de idade</Text>
                      </HStack>
                      <HStack gap={1.5}>
                        <Box
                          w="14px"
                          h="14px"
                          borderRadius="full"
                          border="2px solid #2e4392"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                        >
                          <Check size={8} strokeWidth={3} color="#2e4392" />
                        </Box>
                        <Text>Sem restrições de doenças pré existentes</Text>
                      </HStack>
                    </VStack>

                    {/* Botão */}
                    <Button
                      bg="#4a7bb7"
                      color="white"
                      w="100%"
                      h="auto"
                      py={2.5}
                      fontSize={{ base: 'xs', md: 'sm' }}
                      fontWeight="700"
                      borderRadius="6px"
                      mt="auto"
                      transition="all 0.3s"
                      _hover={{
                        bg: '#3d6a9f',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                      }}
                    >
                      CONTRATAR PLANO
                    </Button>
                  </VStack>
                </Box>
              </AnimatedSection>

              {/* Card 2 - Plano Anual */}
              <AnimatedSection direction="up" delay={0.3}>
                <Box
                  bg="white"
                  borderRadius="15px"
                  overflow="hidden"
                  boxShadow="0 4px 20px rgba(0,0,0,0.15)"
                  h="100%"
                  display="flex"
                  flexDirection="column"
                >
                  {/* Imagem do Plano */}
                  <Box
                    h={{ base: '140px', md: '160px' }}
                    w="100%"
                    overflow="hidden"
                  >
                    <Image
                      src="/images/familia2.avif"
                      alt="Família - Plano Anual"
                      w="100%"
                      h="100%"
                      objectFit="cover"
                    />
                  </Box>

                  {/* Conteúdo do Card */}
                  <VStack align="center" p={{ base: 4, md: 5 }} gap={2.5} flex={1}>
                    {/* Título do Plano */}
                    <Heading
                      as="h3"
                      fontSize={{ base: 'lg', md: 'xl' }}
                      fontWeight="400"
                      color="#2e4392"
                      textAlign="center"
                    >
                      Plano <Box as="span" fontWeight="700">Anual</Box>
                    </Heading>
                    <Text fontSize={{ base: 'xs', md: 'sm' }} color="#555" fontWeight="500">
                      Pagamento Único
                    </Text>

                    {/* Preço */}
                    <VStack gap={0} my={1}>
                      <Text fontSize="xs" color="#555">
                        A partir de €
                      </Text>
                      <Heading
                        as="h4"
                        fontSize={{ base: '2.5rem', md: '2.75rem' }}
                        fontWeight="700"
                        color="#2e4392"
                        lineHeight="1"
                      >
                        39,90
                        <Box as="span" fontSize={{ base: 'sm', md: 'md' }} fontWeight="400" color="#555">
                          {' '}/Anual
                        </Box>
                      </Heading>
                    </VStack>

                    {/* Destaque Promocional */}
                    <Text
                      fontSize="2xs"
                      color="#2e4392"
                      fontWeight="400"
                      textAlign="center"
                      lineHeight="1.4"
                    >
                      Pague por <Box as="span" fontWeight="700">5 meses</Box> e ganhe{' '}
                      <Box as="span" fontWeight="700">8 meses gratuitamente.</Box>
                    </Text>

                    {/* Lista de Benefícios */}
                    <VStack align="flex-start" gap={1.5} w="100%" fontSize="xs" color="#555" mt={1} flex={1}>
                      <HStack gap={1.5}>
                        <Box
                          w="14px"
                          h="14px"
                          borderRadius="full"
                          border="2px solid #2e4392"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                        >
                          <Check size={8} strokeWidth={3} color="#2e4392" />
                        </Box>
                        <Text>Valor referente a 1 pessoa</Text>
                      </HStack>
                      <HStack gap={1.5}>
                        <Box
                          w="14px"
                          h="14px"
                          borderRadius="full"
                          border="2px solid #2e4392"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                        >
                          <Check size={8} strokeWidth={3} color="#2e4392" />
                        </Box>
                        <Text>Sem carência</Text>
                      </HStack>
                      <HStack gap={1.5}>
                        <Box
                          w="14px"
                          h="14px"
                          borderRadius="full"
                          border="2px solid #2e4392"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                        >
                          <Check size={8} strokeWidth={3} color="#2e4392" />
                        </Box>
                        <Text>Fidelidade de 12 meses</Text>
                      </HStack>
                      <HStack gap={1.5}>
                        <Box
                          w="14px"
                          h="14px"
                          borderRadius="full"
                          border="2px solid #2e4392"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                        >
                          <Check size={8} strokeWidth={3} color="#2e4392" />
                        </Box>
                        <Text>Sem restrições de idade</Text>
                      </HStack>
                      <HStack gap={1.5}>
                        <Box
                          w="14px"
                          h="14px"
                          borderRadius="full"
                          border="2px solid #2e4392"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink={0}
                        >
                          <Check size={8} strokeWidth={3} color="#2e4392" />
                        </Box>
                        <Text>Sem restrições de doenças pré existentes</Text>
                      </HStack>
                    </VStack>

                    {/* Botão */}
                    <Button
                      bg="#4a7bb7"
                      color="white"
                      w="100%"
                      h="auto"
                      py={2.5}
                      fontSize={{ base: 'xs', md: 'sm' }}
                      fontWeight="700"
                      borderRadius="6px"
                      mt="auto"
                      transition="all 0.3s"
                      _hover={{
                        bg: '#3d6a9f',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                      }}
                    >
                      CONTRATAR PLANO
                    </Button>
                  </VStack>
                </Box>
              </AnimatedSection>
            </Grid>
          </Container>
        </Box>

        {/* Seção 5 - Parte 2: Sobre Nós - Desktop (Posicionada Absolutamente) */}
        <Box
          display={{ base: 'none', md: 'block' }}
          position="absolute"
          top={{ md: '85vh', lg: '45%' }}
          left="50%"
          transform="translate(-50%, -50%)"
          w={{ md: '80%', lg: '80%' }}
          zIndex={10}
        >
          <Box
            position="relative"
            backgroundImage="url(/images/medicoatendendo.jpg)"
            backgroundSize="cover"
            // backgroundPosition="center"
            backgroundRepeat="no-repeat"
            py={{ base: 8, md: 12 }}
            borderRadius="20px"
            height="350px"
            overflow="hidden"
            boxShadow="0 8px 30px rgba(0,0,0,0.3)"
          >
            {/* Overlay escuro semi-transparente */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="rgba(50, 60, 80, 0.75)"
              zIndex={1}
            />

            <Container maxW="100%" px={{ base: 4, md: 6, lg: 8 }} position="relative" zIndex={2}>
              {/* Título Centralizado */}
              <Heading
                as="h2"
                fontSize={{ base: '2rem', md: '2.5rem' }}
                fontWeight="700"
                color="white"
                textAlign="center"
                mb={{ base: 6, md: 8 }}
              >
                Sobre Nós
              </Heading>

              {/* Grid com 2 Colunas */}
              <Grid
                templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                gap={{ base: 5, md: 6, lg: 10 }}
                w="100%"
              >
                {/* Coluna Esquerda */}
                <VStack align="flex-start" gap={3} color="white">
                  <Heading
                    as="h3"
                    fontSize={{ base: 'lg', md: 'xl' }}
                    fontWeight="700"
                  >
                    Gostamos de cuidar das pessoas
                  </Heading>
                  <Text fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7">
                    Somos uma plataforma portuguesa que une a confiança de um médico 24h online com rapidez exigida no dia a dia.
                  </Text>
                  <Text fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7">
                    Nosso corpo clínico é formado por médicos que valorizam a escuta e o atendimento humanizado com o paciente.
                  </Text>
                </VStack>

                {/* Coluna Direita */}
                <VStack align="flex-start" gap={3} color="white">
                  <Text fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7">
                    Nossas teleconsultas contam com 90% de índice de resolutividade e satisfação.
                  </Text>
                  <Text fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7">
                    Com médicos legalmente registados em Portugal, equipe estável e atendimento humanizado, nós cuidamos de tua saúde com{' '}
                    <Box as="span" fontWeight="700">verdade, tecnologia e presença.</Box>
                  </Text>
                </VStack>
              </Grid>
            </Container>
          </Box>
        </Box>
      </Box>

      {/* Seção 6 - Como Funciona (3 Passos) */}
      <Box
        bg="#f5f5f5"
        py={{ base: 6, md: 8 }}
      >
        <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }}>
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
            gap={{ base: 4, md: 5, lg: 6 }}
            maxW="1200px"
            mx="auto"
          >
            {/* Card 1 - Escolha seu Plano */}
            <AnimatedSection direction="up" delay={0.1}>
              <Box
                bg="#3d5a9c"
                p={{ base: 6, md: 7 }}
                borderRadius="20px"
                color="white"
                h="100%"
                display="flex"
                flexDirection="column"
                gap={3}
              >
                <Heading
                  as="h3"
                  fontSize={{ base: 'xl', md: '1.5rem' }}
                  fontWeight="700"
                  lineHeight="1.3"
                >
                  1 - Escolha seu Plano
                </Heading>
                <Text fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7">
                  Após a assinatura do plano, receberá os dados de acesso à plataforma no seu email. Caso não o encontre, verifique a sua caixa de spam e lixeira.
                </Text>
              </Box>
            </AnimatedSection>

            {/* Card 2 - Acesse a Plataforma */}
            <AnimatedSection direction="up" delay={0.2}>
              <Box
                bg="#5b88d6"
                p={{ base: 6, md: 7 }}
                borderRadius="20px"
                color="white"
                minH={{ base: 'auto', md: '280px' }}
                display="flex"
                flexDirection="column"
                gap={3}
              >
                <Heading
                  as="h3"
                  fontSize={{ base: 'xl', md: '1.5rem' }}
                  fontWeight="700"
                  lineHeight="1.3"
                >
                  2 - Acesse a Plataforma
                </Heading>
                <Text fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7">
                  Abra o app Toda Gente Telemedicina no telemóvel ou acesse o nosso site. Insira seu login e senha recebidos por e-mail.
                </Text>
              </Box>
            </AnimatedSection>

            {/* Card 3 - Consulta */}
            <AnimatedSection direction="up" delay={0.3}>
              <Box
                bg="#3d5a9c"
                p={{ base: 6, md: 7 }}
                borderRadius="20px"
                color="white"
                minH={{ base: 'auto', md: '280px' }}
                display="flex"
                flexDirection="column"
                gap={3}
              >
                <Heading
                  as="h3"
                  fontSize={{ base: 'xl', md: '1.5rem' }}
                  fontWeight="700"
                  lineHeight="1.3"
                >
                  3 - Consulta
                </Heading>
                <Text fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7">
                  Uma vez logado, terá acesso ao atendimento com um médico online em até 10 minutos.
                </Text>
              </Box>
            </AnimatedSection>
          </Grid>
        </Container>
      </Box>

      {/* Seção 7 - FAQ */}
      <Box
        py={{ base: 8, md: 12 }}
        position="relative"
        backgroundImage="url(/images/medicoduvidas.jpg)"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        {/* Overlay */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(61, 90, 156, 0.85)"
          zIndex={1}
        />

        <Container maxW="1000px" px={{ base: 4, md: 6, lg: 8 }} position="relative" zIndex={2}>
          {/* Título */}
          <AnimatedSection direction="up" delay={0.1}>
            <Heading
              as="h2"
              fontSize={{ base: '2rem', md: '2.5rem', lg: '3rem' }}
              fontWeight="700"
              color="white"
              textAlign="center"
              mb={2}
            >
              PERGUNTAS FREQUENTES
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="white"
              textAlign="center"
              mb={{ base: 6, md: 10 }}
            >
              Perguntas que possam ter em mente:
            </Text>
          </AnimatedSection>

          {/* FAQ Items */}
          <AnimatedSection direction="up" delay={0.2}>
            <VStack gap={3} align="stretch">
              <FAQItem question="A Toda Gente é de Portugal e tem registro na SNS?" />
              <FAQItem
                question="As consultas são realmente ilimitadas?"
                answer="Sim. Poderá utilizar a plataforma quantas vezes forem necessárias, sem limite. A utilização ilimitada está sujeita às normas e protocolos médicos."
              />
              <FAQItem question="Os médicos são certificados?" />
              <FAQItem question="O Atendimento é 24h por dia?" />
              <FAQItem question="As receitas e atestados são válidos em toda Portugal?" />
              <FAQItem question="O Portal Toda Gente está restrito somente para Portugal?" />
              <FAQItem question="A Toda Gente atende especialidades?" />
              <FAQItem question="A Toda Gente atende quem tem doenças pré-existentes?" />
              <FAQItem question="Posso incluir mais pessoas no plano?" />
              <FAQItem question="Quem poderá solicitar atendimento na Plataforma Toda Gente?" />
              <FAQItem question="Posso ser atendido(a) mesmo sem UTENTE?" />
              <FAQItem question="Posso cancelar a qualquer momento?" />
              <FAQItem question="Como funciona o método de cobrança?" />
              <FAQItem question="Haverá estorno caso solicitar o cancelamento?" />
              <FAQItem question="Os médicos podem recusar algum tipo de receita ou prescrição médica?" />
              <FAQItem question="Qual a recomendação ideal para passar pelo atendimento online?" />
              <FAQItem question="O Serviço de Teleconsulta oferece prescrição para Mounjaro?" />
            </VStack>
          </AnimatedSection>
        </Container>
      </Box>

      {/* Seção 8 - Footer */}
      <Box
        bg="white"
        py={{ base: 8, md: 10 }}
        borderTop="1px solid #e0e0e0"
      >
        <Container maxW="1400px" px={{ base: 4, md: 6, lg: 8 }}>
          <Grid
            templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}
            gap={{ base: 8, md: 10 }}
            alignItems="start"
          >
            {/* Coluna 1 - Logo e Descrição */}
            <AnimatedSection direction="left" delay={0.1}>
              <VStack align="flex-start" gap={4}>
                <Image alt="Norte 2020, Portugal 2030, União Europeia" w="2560" h="911" src="https://todagentetelemedicina.com/wp-content/uploads/2025/05/TODAGENTE-LOGO-scaled.png" />
                <Text fontSize="sm" color="#555" lineHeight="1.7">
                  Nosso objetivo é transformar o acesso à saúde, ao oferecer serviços médicos acessíveis ao alcance de todos.
                </Text>
              </VStack>
            </AnimatedSection>

            {/* Coluna 2 - Logos Institucionais */}
            <AnimatedSection direction="up" delay={0.2}>
              <VStack align="center" gap={4} justify="center">
                <Box
                  bg="white"
                  px={{ base: 5, md: 2 }}
                  py={{ base: 2.5, md: 2.5 }}
                  borderRadius="25px"
                  boxShadow="0 2px 8px rgba(0,0,0,0.1)"
                >
                  {/* <Image
              src="/images/logos-institucionais.jpg"
              alt="Norte 2020, Portugal 2030, União Europeia"
              h={{ base: '30px', md: '62px' }}
              objectFit="contain"
            /> */}
                  <Link
                    href='https://todagentetelemedicina.com/wp-content/uploads/2025/08/SantosLotti_Ficha-de-Operacao.pdf'
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/logos-institucionais.jpg"
                      alt="Norte 2020, Portugal 2030, União Europeia"
                      h={{ base: '30px', md: '62px' }}
                      w={{ base: '100%', md: '100%' }}
                      objectFit="contain"
                      borderRadius="25px"
                    />
                  </Link>
                </Box>

                {/* Redes Sociais */}
                <HStack gap={3} mt={2}>
                  <Link
                    href="https://www.instagram.com/todagentetelemedicina/"
                    target="_blank"
                    rel="noopener noreferrer"
                    w="40px"
                    h="40px"
                    borderRadius="full"
                    bg="#3d5a9c"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    fontSize="20px"
                    transition="all 0.3s"
                    _hover={{ bg: '#2e4392', transform: 'scale(1.1)' }}
                  >
                    <Instagram />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@TodaGenteTelemedicina"
                    target="_blank"
                    rel="noopener noreferrer"
                    w="40px"
                    h="40px"
                    borderRadius="full"
                    bg="#ff0000"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    fontSize="20px"
                    transition="all 0.3s"
                    _hover={{ transform: 'scale(1.1)' }}
                  >
                    <Youtube />
                  </Link>
                </HStack>
              </VStack>
            </AnimatedSection>

            {/* Coluna 3 - Contacto */}
            <AnimatedSection direction="right" delay={0.3}>
              <VStack align="flex-start" gap={3}>
                <Heading as="h4" fontSize="lg" fontWeight="700" color="#2e4392">
                  Contacto
                </Heading>
                <VStack align="flex-start" gap={2} fontSize="sm" color="#555">
                  <Text>
                    <Box as="span" fontWeight="600">Nº de Registo:</Box> 517741792
                  </Text>
                  <Text lineHeight="1.6">
                    ERS – Entidade Reguladora da Saúde Registo: 41567
                  </Text>
                  <Text lineHeight="1.6">
                    Lagradouro Lake Towers – Edifício D, R. Daciano Baptista Marques 245,
                    4400-617 Vila Nova de Gaia, Portugal
                  </Text>
                  <Link
                    href="mailto:atendimento@todagentetelemedicina.com"
                    color="#2e4392"
                    fontWeight="600"
                    textDecoration="underline"
                    _hover={{ color: '#11a2d7' }}
                  >
                    atendimento@todagentetelemedicina.com
                  </Link>
                </VStack>
              </VStack>
            </AnimatedSection>
          </Grid>

          {/* Copyright */}
          <Box
            bg="#2e4392"
            py={6}
            borderTop="1px solid rgba(255,255,255,0.2)"
            borderRadius="10px"
          >
            <Container borderRadius="10px" maxW="1400px" px={{ base: 4, md: 6, lg: 8 }}>
              <HStack
                justify="space-between"
                flexDirection={{ base: 'column', md: 'row' }}
                gap={{ base: 3, md: 0 }}
              >
                <Text fontSize="xs" color="white" textAlign={{ base: 'center', md: 'left' }}>
                  Desenvolvido: LT Cloud 2025 © Todos os direitos reservados
                </Text>
                <HStack gap={4} fontSize="xs">
                  <Link href="#" color="white" fontWeight="600" _hover={{ textDecoration: 'underline' }}>
                    Política De Privacidade
                  </Link>
                  <Link href="#" color="white" fontWeight="600" _hover={{ textDecoration: 'underline' }}>
                    Termos De Uso
                  </Link>
                </HStack>
              </HStack>
            </Container>
          </Box>
        </Container>
      </Box>

      {/* Botão WhatsApp Flutuante */}
      <Link
        href="https://wa.me/351937097574"
        target="_blank"
        rel="noopener noreferrer"
        position="fixed"
        bottom={{ base: '24px', md: '32px' }}
        right={{ base: '24px', md: '32px' }}
        w={{ base: '60px', md: '68px' }}
        h={{ base: '60px', md: '68px' }}
        bg="#25D366"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="0 4px 16px rgba(37, 211, 102, 0.4)"
        transition="all 0.3s"
        zIndex={1000}
        textDecoration="none"
        _hover={{
          transform: 'scale(1.1)',
          boxShadow: '0 6px 24px rgba(37, 211, 102, 0.5)',
          textDecoration: 'none'
        }}
      >
        <Box fontSize={{ base: '32px', md: '36px' }}>💬</Box>
      </Link>
    </Box>
  )
}
