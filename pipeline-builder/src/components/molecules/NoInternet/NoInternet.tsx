import { Image, Modal, Stack, Text, Title } from '@mantine/core';
import { useNetwork } from '@mantine/hooks';
import IconInternet from '../../../assets/images/noInternet.svg';
// import classes from './NoInternet.module.css';

export interface NoInternetArgs {
  opened?: boolean;
}

export const NoInternet = ({ opened }: NoInternetArgs) => {
  const networkStatus = useNetwork();

  return (
    <Modal
      opened={opened || !networkStatus.online}
      onClose={() => ''}
      withCloseButton={false}
      centered
      size="md"
      padding={0}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <Image
        style={{
          width: '400px',
          margin: 'auto',
        }}
        src={IconInternet}
      />
      <Stack gap={0} mb={40}>
        <Title ta="center">Oops!</Title>
        <Text size="sm" ta="center" c="gray">
          No Internet connection found.
        </Text>
        <Text size="sm" ta="center" c="gray">
          Check your connection and try again
        </Text>
      </Stack>
    </Modal>
  );
};
