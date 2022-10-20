import { NextPage } from 'next';
import { Box, Flex, Heading, Center } from '@chakra-ui/react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { ServiceLayout } from '@/components/service-layout';
import { GoogleLoginButton } from '@/components/google_login_button';
import FirebaseClient from '@/models/firebase_client';

const provider = new GoogleAuthProvider();

const IndexPage: NextPage = function () {
  return (
    <ServiceLayout title="hello world">
      <Box maxW="md" mx="auto">
        <img src="/main_logo.svg" alt="메인 로고" />
        <Flex justify="center">
          <Heading>#블라블라</Heading>
        </Flex>
      </Box>
      <Center mt="20">
        <GoogleLoginButton
          onClick={() => {
            signInWithPopup(FirebaseClient.getInstance().Auth, provider)
              .then((result) => {
                console.log(result.user);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        />
      </Center>
    </ServiceLayout>
  );
};

export default IndexPage;
