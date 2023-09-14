
import React from "react";
import { Text } from "@chakra-ui/react";

const CustomText = ({ children }) => {
  return (
    <Text
      marginLeft={{ base: 5, md: "50px" }}
      textAlign="justify"
      maxWidth="1000px"
      fontWeight="bold"
      fontSize={{ base: "16px", md: "18px" }}
      w={{ base: "100%", md: "auto" }}
      width={{ base: "90%", md: "auto" }}
    >
      {children}
    </Text>
  );
};

export default CustomText;
