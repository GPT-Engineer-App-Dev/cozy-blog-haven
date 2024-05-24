import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (title && content) {
      const newPost = { title, content };
      const posts = JSON.parse(localStorage.getItem("posts")) || [];
      posts.push(newPost);
      localStorage.setItem("posts", JSON.stringify(posts));
      toast({
        title: "Post added.",
        description: "Your new post has been added successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/");
    } else {
      toast({
        title: "Error.",
        description: "Please fill in both the title and content fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Add New Post</Heading>
        <Input
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleSubmit}>Submit</Button>
      </VStack>
    </Container>
  );
};

export default AddPost;