import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Loader: React.FC = () => {
  const { loading } = useTypedSelector((state) => state.ticketReducer);
  const antIcon = <LoadingOutlined style={{ fontSize: 42 }} spin />;
  return <Spin indicator={antIcon} />;
};

export default Loader;
