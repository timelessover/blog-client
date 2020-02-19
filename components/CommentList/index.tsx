import React, { useState, useEffect } from "react";
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

  const handleComment = (e, c: any) => {
    // https://zhuanlan.zhihu.com/p/26742034
    // 阻止合成事件与最外层document上的事件间的冒泡
    e.nativeEvent.stopImmediatePropagation();
    console.log(c);
    setId(c);
    console.log("comment");
  };

  const handleApproval = (c: any) => {
    console.log(c);
    console.log("appr");
  };

  const handleBox = e => {
    e.nativeEvent.stopImmediatePropagation();
  };

  const [id, setId] = useState();
  useEffect(() => {
    document.addEventListener("click", () => {
      setId("");
    });
    return () => {
      document.removeEventListener(
        "click",
        () => {
          setId("");
        }
      );
    };
  }, []);

  const hanleChange = e => {
    console.log(e)
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
        .footer {
          display: flex;
          justify-content: space-between;
          margin-top: 15px;
        }
        .footer-right :global(span) {
          margin-right: 15px;
          cursor: pointer;
        }
        .sub-list {
          padding: 0 50px;
        }
      `}</style>
      <div className="container">
        <div className="top-title">
          <span>53 条评论</span>
        </div>

        <List
          itemLayout="vertical"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<div>{item.title}</div>}
              />
              写的很好，今年跟着大佬一起学技术了dsdadasjkldljsalkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkfsadsadsafakkkkkkkkkkkkkkkkkkkkkkkkkkkkkfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
              <div className="footer">
                <div className="footer-left">2020-01-01 00:33:12</div>
                <div className="footer-right">
                  <IconText
                    type="like-o"
                    text="156"
                    key="list-vertical-like-o"
                    onClick={() => handleApproval(index)}
                  />

                  <IconText
                    type="message"
                    text="2"
                    key="list-vertical-message"
                    onClick={e => handleComment(e, index)}
                  />
                </div>
              </div>
              {id === index ? (
                <div onClick={handleBox}>
                  <TextArea defaultValue="@xxx:" onChange={hanleChange}></TextArea>
                  <Button>回复</Button>
                </div>
              ) : (
                ""
              )}
              <div className="sub-list">
                <List
                  itemLayout="vertical"
                  dataSource={data}
                  renderItem={(item, index) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={<div>{item.title}</div>}
                      />
                      写的很好，
                      <div className="footer">
                        <div className="footer-left">2020-01-01 00:33:12</div>
                        <div className="footer-right">
                          <IconText
                            type="like-o"
                            text="156"
                            key="list-vertical-like-o"
                            onClick={() => handleApproval(index)}
                          />

                          <IconText
                            type="message"
                            text="2"
                            key="list-vertical-message"
                            onClick={e => handleComment(e, index)}
                          />
                        </div>
                      </div>
                      {id === index ? (
                        <div onClick={handleBox}>
                          <TextArea defaultValue="@xxx:"></TextArea>
                          <Button>回复</Button>
                        </div>
                      ) : (
                        ""
                      )}
                      <div></div>
                    </List.Item>
                  )}
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
