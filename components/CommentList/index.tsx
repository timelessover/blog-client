import React, { useState, useEffect } from "react";
import { Avatar, Divider, Input, Button, List, Skeleton, Icon, message } from "antd";
import Comment from "../Comment";
import { getCommentlist, updateLikeComment, replyComment } from "../../api";
import { timestampToTime, getDateDiff } from "../../utlis/utils";

const { TextArea } = Input;

const CommentList = (props: any) => {
  const [commentList, setCommentList] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const [reply,setReply] = useState('')

  const { article_id, userLogin, isComment } = props;

  const fetchCommentList = async () => {
    const res = await getCommentlist(article_id);
    setCommentCount(res.count);
    setCommentList(res.data);
  };

  useEffect(() => {
    if (props.article_id) {
      fetchCommentList();
    }
  }, [isComment, userLogin]);

  const IconText = ({ type, text, onClick, color }: any) => (
    <span onClick={onClick} style={{ color }}>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

  const handleComment = (e, c: any) => {
    // https://zhuanlan.zhihu.com/p/26742034
    // 阻止合成事件与最外层document上的事件间的冒泡
    e.nativeEvent.stopImmediatePropagation();
    setId(c);
  };

  const handleApproval = async (comment_id: string) => {
    if(userLogin){
       const res = await updateLikeComment({ comment_id });
       commentList.map(item => {
         if (item._id === comment_id) {
           if (item.isLiked) {
             item.likes_count = item.likes_count - 1;
           } else {
             item.likes_count = item.likes_count + 1;
           }
           item.isLiked = !item.isLiked;
         }
       });
       const new_list = JSON.parse(JSON.stringify(commentList));
       setCommentList(new_list);
    }else{
      message.error('登录后才可点赞评论')
    }
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
      document.removeEventListener("click", () => {
        setId("");
      });
    };
  }, []);

  const hanleChange = ({ target: { value } }) => {
    setReply(value);
  };

  const handleReply = async (comment_id, res_userInfo) => {
    const res =  await replyComment({ comment_id, res_userInfo,content:reply });
    fetchCommentList();
  }

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
          renderItem={(item: any, index) => (
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
                    color={item.isLiked ? "#1890ff" : ""}
                    text={item.likes_count}
                    key="list-vertical-like-o"
                    onClick={() => handleApproval(item._id)}
                  />

                  <IconText
                    type="message"
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
                  <Button onClick={() => handleReply(item._id, item.uid._id)}>
                    回复
                  </Button>
                </div>
              ) : (
                ""
              )}
              {item.res_comment.length ? (
                <div className="sub-list">
                  <List
                    itemLayout="vertical"
                    dataSource={item.res_comment}
                    renderItem={(sub: any, index) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <Avatar src={sub.top_userInfo.avatar || ""} />
                          }
                          title={<div>{sub.top_userInfo.username}</div>}
                        />
                        {sub.content}
                        <div className="footer">
                          <div className="footer-left">
                            {getDateDiff(sub.create_time)}
                          </div>
                          <div className="footer-right">
                            <IconText
                              type="like-o"
                              text={sub.likes_count}
                              color={sub.isLiked ? "#1890ff" : ""}
                              key="list-vertical-like-o"
                              onClick={() => handleApproval(sub._id)}
                            />

                            <IconText
                              type="message"
                              key="list-vertical-message"
                              onClick={e => handleComment(e, sub._id)}
                            />
                          </div>
                        </div>
                        {id === sub._id ? (
                          <div onClick={handleBox}>
                            <TextArea
                              placeholder={`@${item.uid.username}`}
                            ></TextArea>
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
              ) : (
                ""
              )}
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

export default CommentList;
