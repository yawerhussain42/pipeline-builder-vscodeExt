import { Image, Container, Title, Text, Button, SimpleGrid, Group, Box } from '@mantine/core';
import notFoundImg from '../../../assets/images/notFoundImage.svg';
import { useNavigate } from 'react-router-dom';
import classes from './PageNotFound.module.css';

export interface PageNotFoundArgs {}
export const PageNotFound = ({}: PageNotFoundArgs) => {
  const navigate = useNavigate();

  return (
    <Box bg="white">
      <Container size="xl">
        <Group align="center" justify="center" h="100vh">
          <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
            <Image src={notFoundImg} className={classes.mobileImage} />
            <div>
              <Title className={classes.title}>Something is not right...</Title>
              <Text c="dimmed" size="lg">
                Page you are trying to open does not exist. You may have mistyped the address, or
                the page has been moved to another URL. If you think this is an error contact
                support.
              </Text>
              <Button
                variant="outline"
                size="md"
                mt="xl"
                className={classes.control}
                onClick={() => navigate('/')}
              >
                Get back to home page
              </Button>
            </div>
            <Image pos="relative" top={-100} src={notFoundImg} className={classes.desktopImage} />
          </SimpleGrid>
        </Group>
      </Container>
    </Box>
  );
};
