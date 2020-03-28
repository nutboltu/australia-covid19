import { Table, Divider, Tag } from 'antd';

const columns = [
  {
    title: 'Cases',
    dataIndex: 'label',
    key: 'label',
    width: 300,
    render: text => {
      if (text.includes('confirmed')) {
        return (
          <Tag color='volcano'>POSITIVE</Tag>
        )
      } else if (text.includes('excluded')) {
        return <Tag color='green'>NEGATIVE</Tag>
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

export const CasesTable = ({ data }) => {
  return (
    <>
      <Divider orientation="center">
          Total tested
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