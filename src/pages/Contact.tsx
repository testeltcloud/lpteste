import { Box, Heading, Text, Stack, Input, Textarea, Button } from '@chakra-ui/react'
import { Field } from '@chakra-ui/react'

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
        <Field label="Nome">
          <Input placeholder="Seu nome" required />
        </Field>

        <Field label="Email">
          <Input type="email" placeholder="seu@email.com" required />
        </Field>

        <Field label="Mensagem">
          <Textarea placeholder="Digite sua mensagem..." rows={5} required />
        </Field>

        <Button type="submit" colorPalette="brand" size="lg" width="full">
          Enviar Mensagem
        </Button>
      </Stack>
    </Box>
  )
}
