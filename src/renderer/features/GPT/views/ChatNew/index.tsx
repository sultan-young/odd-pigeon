import { Button, Form, Input, Radio, Select } from 'antd'
import React, { useState } from 'react'

type SizeType = Parameters<typeof Form>[0]['size'];

export const ChatGptNew: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>(
    'default'
  )

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size)
  }

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="gpt-3.5-turbo">gpt-3.5-turbo</Select.Option>
            <Select.Option disabled value="gpt-4">gpt-4</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </>
  )
}
