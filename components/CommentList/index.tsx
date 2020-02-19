import React, { useState } from "react";
import { Avatar, Divider, Input, Button, List, Skeleton, Icon } from "antd";
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

  const handleComment = (c: any) => {
    console.log(c);
    console.log("comment");
  };

  const handleApproval = c => {
    console.log("appr");
  };

  return (
    <>
      <style jsx>{`
        .container {
          background: #fff;
          width: 100%;
          padding: 1rem;
          margin-top: 10px;
        }
        .user-container {
          font-size: 12px;
        }
        .user-container div {
          margin-right: 10px;
        }
        .top-title {
          padding-bottom: 20px;
          font-size: 17px;
          font-weight: 700;
          border-bottom: 1px solid #f0f0f0;
        }

        .container :global(.ant-list-items) {
          word-wrap: break-word;
          white-space: pre-wrap;
          word-break: break-all;
        }
      `}</style>
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
    </>
  );
};

export default CommentList;
