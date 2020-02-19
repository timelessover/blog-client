import React, { useState } from "react";
import { Avatar, Divider, Input, Button } from "antd";

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
      <style jsx>{`
        .container {
          background: #fff;
          text-align: center;
          width: 100%;
          padding: 1rem;
          color: #888;
          margin-top: 10px;
        }
        .btn {
          text-align: left;
          margin-top: 10px;
        }
        .icon-action {
          margin-top: 16px;
          margin-left: auto;
        }
      `}</style>
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
