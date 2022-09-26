import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

export default function CookieModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Customize Consent Preferences</ModalHeader>
        <ModalCloseButton />
        <ModalBody borderTop="1px solid">
          We use cookies to help you navigate efficiently and perform certain
          functions. You will find detailed information about all cookies under
          each consent category below. The cookies that are categorized as
          "Necessary" are stored on your browser as they are essential for
          enabling the basic functionalities of the site. We also use
          third-party cookies that help us analyze how you use this website,
          store your preferences, and provide the content and advertisements
          that are relevant to you. These cookies will only be stored in your
          browser with your prior consent.
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
