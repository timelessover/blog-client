import { Avatar, Divider } from 'antd'
import style from './style.scss'
import cx from 'classnames'

const Footer = () => (
    <div className={cx(style["footer-div"])}>
        <div>系统由 React+Node+Ant Desgin驱动 </div>
        <div>JSPang.com</div>
    </div>
)

export default Footer