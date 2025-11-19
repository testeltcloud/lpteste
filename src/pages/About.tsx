import { Box, Heading, Text, Stack } from '@chakra-ui/react'

export default function About() {
  return (
    <Box py={10} px={6}>
      <Heading as="h1" size="2xl" mb={6}>
        Sobre o Projeto
      </Heading>
      <Stack gap={4}>
        <Text fontSize="lg">
          Este projeto foi criado com as seguintes tecnologias:
        </Text>
        <Box as="ul" pl={6}>
          <Text as="li" fontSize="lg">⚛️ React 18</Text>
          <Text as="li" fontSize="lg">⚡ Vite</Text>
          <Text as="li" fontSize="lg">📘 TypeScript</Text>
          <Text as="li" fontSize="lg">🎨 Chakra UI</Text>
          <Text as="li" fontSize="lg">🔄 React Router</Text>
        </Box>
        <Text fontSize="lg" mt={4}>
          Uma estrutura moderna e performática para criar aplicações web!
        </Text>
      </Stack>
    </Box>
  )
}
