import React, { useState, useDebugValue } from "react";
import { useActions } from '../hooks/use-actions'
import { useHistory } from "react-router-dom";

export function CreateBlog() {
  const title = useInput("");
  const body = useInput("");
  const { createBlog } = useActions()
  const history = useHistory();


  function onSubmit() {
    console.log(title.value, body.value);
    createBlog({ id: 1, title: title.value, body: body.value })
    history.push("/")
    //some post call to create
  }

  return (
    <div>
      <div>
        <label>Title</label>
        <input {...title} />
      </div>
      <div>
        <label>Body</label>
        <input {...body} />
      </div>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

function useInput(val: string) {
  const [value, onChange] = useState(val);

  useDebugValue(value);

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value);
  }

  return { value, onChange: onInputChange };
}
