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
        The cookies used on this website are essential for the proper functioning of the site. These cookies are the most basic and are necessary to ensure that the website works as intended. By using this website, you consent to the use of these essential cookies.
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
