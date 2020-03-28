import { Table, Divider, Tag } from 'antd';
import nswCasesData from '../../../data/nsw/cases.json';

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

export const NSWCasesTable = () => {
  return (
    <>
      <Divider orientation="center">
          Total tested
      </Divider>
      <Table
        columns={columns}
        dataSource={nswCasesData}
        pagination={false}
        bordered
        tableLayout='fixed'
        size='small'
        />
    </>
  );
}