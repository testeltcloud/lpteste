import { Box, Container, Text, Stack } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box as="footer" bg="bg.panel" borderTop="1px" borderColor="border" py={8} mt="auto">
      <Container maxW="container.xl">
        <Stack align="center" gap={2}>
          <Text fontSize="sm" color="fg.muted">
            © {new Date().getFullYear()} LP New Pedro. Todos os direitos reservados.
          </Text>
          <Text fontSize="xs" color="fg.muted">
            Criado com React + Vite + TypeScript + Chakra UI
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}
