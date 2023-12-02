import {
  chakra,
  Box,
  Flex,
  HStack,
  Text,
  Stack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Link as ChakraLink,
  Button,
  VisuallyHidden,
  Icon,
  Divider,
  Container,
  Center,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "./Logo";
import Link from "next/link";
import { motion } from "framer-motion";

import ThemeSwitcher from "./ThemeSwitcher";

import React, { useState, useEffect } from "react";
import { BsTelephone } from "react-icons/bs";
import { useAppContext } from "@/contexts/AppContext";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

function Navbar() {
  const menuProps = {
    bg: useColorModeValue("gray.200", "gray.700"),
    color: useColorModeValue("blue.500", "blue.200"),
  };

  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { siteInfo } = useAppContext();

  return (
    <Container maxW={"7xl"}>
      <Box width="100%" p={2}>
        <Flex
          direction={"row"}
          maxW={1200}
          justifyContent="space-between"
          mx="auto"
        >
          <HStack _hover={{ cursor: "pointer", color: "#0047BB" }}>
            <Icon as={BsTelephone} />
            <Link href={`tel:${siteInfo.phoneNumber}`}>
              {" "}
              {siteInfo.phoneNumberDisplay}
            </Link>
          </HStack>

          <HStack spacing={5} p={2}>
            {siteInfo.socialMediaLinks.map((link) => (
              <>
                <SocialButton label={link.name} href={link.path}>
                  <link.icon />
                </SocialButton>
              </>
            ))}
          </HStack>
        </Flex>
      </Box>
      <Divider />

      <HeaderNav isSticky={isSticky} />

      {isSticky && (
        <>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isSticky ? 1 : 0, y: isSticky ? 0 : -20 }}
            transition={{ duration: isSticky ? 0.4 : 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: isSticky ? "fixed" : "relative",
              top: 0,
              left: 0,
              width: "100%",
              zIndex: 50,
              backdropFilter: "blur(15px)",
              boxShadow: isSticky ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
            }}
          >
            <HeaderNav isSticky={isSticky} />
          </motion.div>
        </>
      )}
    </Container>
  );
}

const HeaderNav = ({ isSticky }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { navbarLinks, siteInfo } = useAppContext();

  return (
    <>
      <Box px={4} width="100%" p={2}>
        <Flex
          h={16}
          alignItems="center"
          justifyContent="space-between"
          maxW={1200}
          mx="auto"
        >
          <IconButton
            size="md"
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label="Open Menu"
            display={["inherit", "inherit", "none"]}
            onClick={isOpen ? onClose : onOpen}
            variant={"ghost"}
          />

          <Logo />
          <HStack spacing={8} alignItems="center">
            <HStack
              as="nav"
              spacing={1}
              display={{ base: "none", md: "flex" }}
              alignItems="center"
            >
              {navbarLinks.map((link, index) => (
                <NavLink key={index} {...link} onClose={onClose} />
              ))}
            </HStack>
          </HStack>

          <ThemeSwitcher />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={["inherit", "inherit", "none"]}>
            <Stack as="nav" spacing={2}>
              {navbarLinks.map((link, index) => (
                <NavLink key={index} {...link} onClose={onClose} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <DrawerExample isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
};

const NavLink = ({ name, path, onClose }) => {
  return (
    <Link href={path || "#"}>
      <Text
        rounded="md"
        onClick={() => onClose()}
        fontWeight={"800"}
        fontFamily={"'Roboto', sans-serif"}
      >
        {name}
      </Text>
    </Link>
  );
};

const DrawerExample = ({ isOpen, onOpen, onClose }) => {
  const btnRef = React.useRef();
  const { navbarLinks } = useAppContext();
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader />
          <DrawerBody>
            <Box>
              <VStack
                as="nav"
                spacing={1}
                display="flex"
                alignItems="center"
                mt={10}
              >
                {navbarLinks.map((link, index) => (
                  <MobileNavLink key={index} {...link} onClose={onClose} />
                ))}
              </VStack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const MobileNavLink = ({ name, path, onClose }) => {
  const [isHovered, setIsHovered] = useState(false);

  const linkStyles = {
    bg: isHovered
      ? useColorModeValue("blue.100", "blue.800")
      : useColorModeValue("gray.200", "gray.700"),
    color: isHovered
      ? useColorModeValue("blue.600", "blue.300")
      : useColorModeValue("blue.500", "blue.200"),
    transition: "background-color 0.2s, color 0.2s",
  };

  return (
    <ChakraLink
      as={Link}
      href={path}
      _hover={{
        textDecoration: "none",
      }}
      textDecoration={"none"}
    >
      <Box
        rounded="md"
        p={3}
        fontSize="md"
        _hover={{
          ...linkStyles,
        }}
        w={"full"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onClose()}
      >
        <Text>{name}</Text>
      </Box>
    </ChakraLink>
  );
};

export default React.memo(Navbar);
