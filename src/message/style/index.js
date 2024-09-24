import { css, globalCSS } from 'omi';

// 为了做主题切换
import styles from '../../_common/style/web/components/message/_index.less';

export const styleSheet = css`
    ${styles}
`;

globalCSS(styleSheet);
