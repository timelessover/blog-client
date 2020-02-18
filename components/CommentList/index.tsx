import React, { useState } from "react";
import { Avatar, Divider, Input, Button, List, Skeleton, Icon } from "antd";
import "./style.scss";
import Comment from "../Comment";

const { TextArea } = Input;

const CommentList = () => {
  const data = [
    {
      title: "Ant Design Title 1"
    },
    {
      title: "Ant Design Title 2"
    },
    {
      title: "Ant Design Title 3"
    },
    {
      title: "Ant Design Title 4"
    }
  ];
  const IconText = ({ type, text, onClick }: any) => (
    <span onClick={onClick}>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

  const handleComment = (c:any) => {
    console.log(c)
    console.log("comment");
  };

  const handleApproval = (c) => {
    console.log("appr");
  };

  return (
    <div className="container">
      <div className="top-title">
        <span>53 条评论</span>
      </div>
      <List
        itemLayout="vertical"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={
                <div className="user-container">
                  <div>{item.title}</div>
                  <div>2020-01-01 00:33:12</div>
                </div>
              }
            />
            写的很好，今年跟着大佬一起学技术了dsdadasjkldljsalkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkfsadsadsafakkkkkkkkkkkkkkkkkkkkkkkkkkkkkfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            <div>
              <IconText
                type="like-o"
                text="156"
                key="list-vertical-like-o"
                onClick={() => handleApproval(3)}
              />

              <IconText
                type="message"
                text="2"
                key="list-vertical-message"
                onClick={() => handleComment(2)}
              />
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CommentList;
