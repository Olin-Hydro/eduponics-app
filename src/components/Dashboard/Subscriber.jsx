import { PubSub } from "aws-amplify";
import {
  Card,
  ScrollView,
  Collection,
  Heading,
  Text,
} from "@aws-amplify/ui-react";
import Box from "@mui/material/Box";

function subscribe(callback, topic) {
  const subscription = PubSub.subscribe(topic).subscribe({
    next: (data) => callback(data), // callback function for msg handling
    error: (error) => console.error(error),
    close: () => console.log("Subscription closed"),
  });
  // Unsubscribe when the component unmounts to avoid memory leaks
  return () => {
    subscription.unsubscribe();
  };
}

function TopicSubscriber({ topic, subMsgs, setSubMsgs }) {
  return (
    <Box>
      <Heading level="2" fontWeight="regular" fontSize="2rem">
        Subscriber
      </Heading>
      <Text>
        New messages from your device(s) that publish to the topic{" "}
        <b>{topic}</b> will appear in the box below
      </Text>
      <ScrollView
        width={{ xs: "100%", md: "580px" }}
        height="300px"
        maxWidth="100%"
      >
        <Collection
          type="list"
          items={subMsgs}
          direction="row"
          justifyContent="space-between"
          wrap="wrap"
        >
          {(item, index) => (
            <Card
              key={index}
              padding="1rem"
              width={{ xs: "100%", md: "180px" }}
            >
              <Heading level={4}>{item.topic}</Heading>
              {/* <Text>{item.id}</Text> */}
              <Text>{item.msg}</Text>
            </Card>
          )}
        </Collection>
      </ScrollView>
    </Box>
  );
}

export { TopicSubscriber, subscribe };
