import React, { useState } from 'react'
import styles from './index.modules.less'
import { Button, Card, Form, Input, Radio } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'

type KeyType = 'private' | 'free'

export const ChatGptSetting: React.FC = () => {
  const [form] = Form.useForm()
  const [keyType, setKeyType] = useState<KeyType>('private')

  const onValuesChange = ({ keyType }: { keyType: KeyType }) => {
    setKeyType(keyType)
  }

  return (
    <div className={styles.container}>
      <Card title="基础配置" bordered={false}>
        <Form
          form={form}
          layout="vertical"
          initialValues={{ keyType }}
          onValuesChange={onValuesChange}
        >
          <Form.Item name="keyType">
            <Radio.Group value={keyType}>
              <Radio.Button value="private">个人KEY</Radio.Button>
              <Radio.Button value="free">免费版</Radio.Button>
            </Radio.Group>
          </Form.Item>
          {keyType === 'private' ? (
            <Form.Item
              label="密钥"
              required
              tooltip="填入在ChatGpt官网申请下来的密钥"
            >
              <Input placeholder="填入在ChatGpt官网申请下来的密钥" />
            </Form.Item>
          ) : <div className={styles['free-tip']}>免费版每天有请求次数限制</div>}
          <Form.Item>
            <Button type="primary">保存</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
