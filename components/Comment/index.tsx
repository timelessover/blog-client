import React, { useState } from "react";
import { Avatar, Divider, Input, Button, message } from "antd";
import { addComment } from "../../api";

const { TextArea } = Input;

const Comment = (props: any) => {
  const [comment, setComment] = useState("");
  const { article_id, userLogin } = props;

  const onChange = ({ target: { value } }) => {
    setComment(value);
  };

  const [isComment, setIsComment] = useState(false); // 更新评论

  const handleSubmit = async () => {
    if (userLogin) {
      const body = {
        article_id,
        content: comment
      };
      const res = await addComment(body);
      const { code } = res;
      if (!code) {
        message.success("评论成功");
        setComment("");
        setIsComment(!isComment);
        props.handleIsFetchList(!isComment);
      } else {
        message.error("评论失败");
      }
    } else {
      message.error("登录后可评论");
    }
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
