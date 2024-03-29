import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

function SubredditBox(props) {
  const [subreddit, setSubreddit] = useState(props.value);

  return (
    <Form
      inline
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmit(subreddit);
      }}
    >
      <FormControl
        type="text"
        placeholder="Subreddit"
        className="mr-lg-2"
        value={subreddit}
        onChange={(e) => {
          e.preventDefault();
          setSubreddit(e.target.value);
        }}
      />
      <Button variant="outline-success" type="submit">
        Go
      </Button>
    </Form>
  );
}

export default SubredditBox;
