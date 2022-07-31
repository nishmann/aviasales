import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';

import style from './Loader.module.scss';

const Loader: React.FC = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 62, color: '#fff' }} spin />;
  return (
    <div className={style.loader}>
      <Spin indicator={antIcon} />
    </div>
  );
};

export default Loader;
