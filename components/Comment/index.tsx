import React, { useState } from "react";
import { Avatar, Divider, Input, Button } from "antd";
import "./style.scss";

const { TextArea } = Input;

const Comment = () => {
  const [comment, setComment] = useState("");

  const onChange = ({ target: { value } }) => {
    setComment(value);
  };

  const handleSubmit = () => {
    console.log(2);
    console.log(comment);
  };

  return (
    <div className="container">
      <div>评论</div>
      
      <TextArea
        value={comment}
        onChange={onChange}
        placeholder="请评论"
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
      <div className="btn">
        <Button
          type="primary"
          disabled={!comment ? true : false}
          onClick={handleSubmit}
        >
          提交
        </Button>
      </div>
    </div>
  );
};

export default Comment;
