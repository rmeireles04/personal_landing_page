import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'
import React from 'react'

const Contact_Form_Email = ({ message, senderEmail }) => {
  return (
    <Html>
      <Head></Head>
      <Preview>New Message from Portfolio Site</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Heading>
                Message from the contact form. <Text>{message}</Text>
                <Hr></Hr>
                <Text>The sender email is: {senderEmail}</Text>
              </Heading>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default Contact_Form_Email
