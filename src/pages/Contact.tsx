import { Box, Heading, Text, Stack, Input, Textarea, Button, VStack } from '@chakra-ui/react'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Formulário enviado! (Esta é apenas uma demo)')
  }

  return (
    <Box py={10} px={6} maxW="600px" mx="auto">
      <Heading as="h1" size="2xl" mb={6}>
        Contato
      </Heading>
      <Text fontSize="lg" mb={6}>
        Entre em contato conosco através do formulário abaixo:
      </Text>

      <Stack as="form" onSubmit={handleSubmit} gap={4}>
        <VStack align="flex-start" gap={2}>
          <Text fontSize="sm" fontWeight="600">Nome</Text>
          <Input placeholder="Seu nome" required />
        </VStack>

        <VStack align="flex-start" gap={2}>
          <Text fontSize="sm" fontWeight="600">Email</Text>
          <Input type="email" placeholder="seu@email.com" required />
        </VStack>

        <VStack align="flex-start" gap={2}>
          <Text fontSize="sm" fontWeight="600">Mensagem</Text>
          <Textarea placeholder="Digite sua mensagem..." rows={5} required />
        </VStack>

        <Button type="submit" bg="#2e4392" color="white" size="lg" width="full" _hover={{ bg: '#11a2d7' }}>
          Enviar Mensagem
        </Button>
      </Stack>
    </Box>
  )
}
