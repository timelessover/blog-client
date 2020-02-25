import { Button, Divider, message } from "antd";
import { isLikeArticle, updateLikeArticle } from "../../api";
import { useState, useEffect } from "react";

const Approval = props => {
  const { article_id } = props;

  const [isLike, setIsLike] = useState(false);

  const fetchIsLike = async () => {
    const res = await isLikeArticle({ article_id });
    setIsLike(res.is_zan);
  };
  useEffect(() => {
    fetchIsLike();
  }, []);

  const hanleToggleLike = async () => {
    const res = await updateLikeArticle({ article_id });
    setIsLike(res.is_zan);
  };

  return (
    <>
      <style jsx>{`
        .container {
          text-align: center;
          width: 100%;
          color: #888;
        }

        .img-box {
          margin-bottom: 50px;
        }
        .img-box img {
          width: 100%;
        }
        .btn {
          height: 60px;
          text-align: center;
          margin: 50px;
        }
      `}</style>
      <div className="container">
        <Divider />
        <div className="img-box">
          <img
            src="https://upload-images.jianshu.io/upload_images/12890819-3a7d6ee6564f9407.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"
            alt=""
          />
        </div>
        <div className="btn">
          <Button
            type={isLike ? "danger" : "default"}
            size="large"
            icon="like"
            onClick={hanleToggleLike}
          >
            {isLike ? "已点赞" : "点赞"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Approval;
