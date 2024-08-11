import React from 'react'
import { Spin } from 'antd';
import 'antd/dist/reset.css';
export default function Antd() {
  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
    <Spin size="large" />
    <p>Loading...</p>
  </div>
  )
}
