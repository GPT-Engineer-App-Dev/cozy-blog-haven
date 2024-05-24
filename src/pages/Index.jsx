import { Container, Text, VStack, Heading, Box, Image, Link, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to My Personal Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-banner.jpg" alt="Blog Banner" borderRadius="md" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Hi there! I'm excited to share my thoughts, experiences, and stories with you. Stay tuned for updates!
        </Text>
        <Link href="/about" color="teal.500" fontSize="lg">Learn more about me</Link>
        <Button as={Link} href="/add-post" colorScheme="teal">Add New Post</Button>
        <VStack spacing={4} width="100%">
          {posts.map((post, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" width="100%">
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.content}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;