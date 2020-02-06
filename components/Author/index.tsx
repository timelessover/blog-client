import { Avatar, Divider } from 'antd'
import style from './style.scss'
import cx from 'classnames'

const Author = () => {

    return (
        <div className={cx('comm-box', style['author-div'])}>
            <div> <Avatar size={100} src="http://blogimages.jspang.com/blogtouxiang1.jpg" /></div>
            <div className={style['author-introduction']}>
                光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className={style['account']}/>
                <Avatar size={28} icon="qq" className={style['account']} />
                <Avatar size={28} icon="wechat" className={style['account']} />

            </div>
        </div>
    )

}

export default Author