import { useEffect, useState } from "react";
import { Container, Text, VStack } from "@chakra-ui/react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lkryrewptosftkwcigwl.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrcnlyZXdwdG9zZnRrd2NpZ3dsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczMzk4NDEsImV4cCI6MjAzMjkxNTg0MX0.ARg259LisuOVRzKayu0mYsxcypN5k7RcpBDEN0-5uUc";
const supabase = createClient(supabaseUrl, supabaseKey);

const Index = () => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .limit(1)
        .single();

      if (error) {
        console.error("Error fetching data:", error);
        setMessage("Error loading message");
      } else {
        setMessage(data.content);
      }
    };

    fetchData();
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">{message}</Text>
      </VStack>
    </Container>
  );
};

export default Index;