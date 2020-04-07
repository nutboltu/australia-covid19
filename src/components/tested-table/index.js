import { Table, Divider, Tag } from 'antd';

const columns = [
  {
    title: 'Cases',
    dataIndex: 'label',
    key: 'label',
    render: text => {
      if (text.includes('Positive')) {
        return (
          <Tag color='volcano'>POSITIVE</Tag>
        )
      } else if (text.includes('Negative')) {
        return <Tag color='cyan'>Tested and Excluded</Tag>
      }
      return <span>{text}</span>
    },
  },
  {
    title: 'Number of people',
    dataIndex: 'value',
    key: 'value',
  },
];

export const TestedTable = ({ data }) => {
  return (
    <>
      <Divider orientation="center">
          Total test conducted
      </Divider>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        tableLayout='fixed'
        size='small'
        />
    </>
  );
}