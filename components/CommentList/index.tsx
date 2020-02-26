import React, { useState, useEffect } from "react";
import { Avatar, Divider, Input, Button, List, Skeleton, Icon } from "antd";
import Comment from "../Comment";
import { getCommentlist} from "../../api";
import { timestampToTime, getDateDiff } from "../../utlis/utils";

const { TextArea } = Input;

const CommentList = (props:any) => {
  const [commentList, setCommentList] = useState([]);
  const [commentCount,setCommentCount] = useState(0)

  const fetchCommentList =  async () => {
    const res = await getCommentlist(props.article_id);
    setCommentCount(res.count);
    setCommentList(res.data)
  } 

  useEffect(() => {
    if (props.article_id) {
      fetchCommentList();
    }
  }, [props.isComment]);

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
          <span>{commentCount} 条评论</span>
        </div>

        <List
          itemLayout="vertical"
          dataSource={commentList}
          renderItem={(item, index) => (
            <List.Item key={item._id}>
              <List.Item.Meta
                avatar={<Avatar src={item.uid.avatar} />}
                title={<div>{item.uid.username}</div>}
              />
              {item.content}
              <div className="footer">
                <div className="footer-left">
                  {getDateDiff(item.create_time)}
                </div>
                <div className="footer-right">
                  <IconText
                    type="like-o"
                    text={item.likes_count}
                    key="list-vertical-like-o"
                    onClick={() => handleApproval(item._id)}
                  />

                  <IconText
                    type="message"
                    text={item.res_comment.length}
                    key="list-vertical-message"
                    onClick={e => handleComment(e, item._id)}
                  />
                </div>
              </div>
              {id === item._id ? (
                <div onClick={handleBox}>
                  <TextArea
                    onChange={hanleChange}
                    placeholder={`@${item.uid.username}`}
                  ></TextArea>
                  <Button>回复</Button>
                </div>
              ) : (
                ""
              )}
              {/* <div className="sub-list">
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
              </div> */}
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

export default CommentList;
