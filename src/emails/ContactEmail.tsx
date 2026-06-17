import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface Props {
  name: string
  email: string
  message: string
}

export function ContactEmail({ name, email, message }: Props) {
  return (
    <Html>
      <Head />

      <Preview>Mensaje desde el Blog de Kapelu</Preview>

      <Body
        style={{
          backgroundColor: '#f4f4f5',
          padding: '40px',
          fontFamily: 'Inter,Arial,sans-serif',
        }}>
        <Container
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '32px',
          }}>
          <Heading>Mensaje desde el Blog Kapelu</Heading>

          <Hr />

          <Section>
            <Text>Nombre: {name}</Text>

            <Text>Email: {email}</Text>
          </Section>

          <Hr />

          <Text>Mensaje:</Text>

          <Text>{message}</Text>
        </Container>
      </Body>
    </Html>
  )
}
