import { Button, Divider } from 'antd'

const Footer = () => (
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
        <Button type="danger" size="large" icon="like">
          点赞
        </Button>
      </div>
    </div>
  </>
);

export default Footer