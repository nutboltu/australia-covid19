import { Table, Divider, Badge } from 'antd';
import nswConfirmedCasesData from '../../../data/nsw/confirmed.json';

const columns = [
  {
    title: 'Status',
    dataIndex: 'label',
    key: 'label',
    width: 300,
    render: text => <span>{text}</span>,
  },
  {
    title: 'Number of people',
    dataIndex: 'value',
    key: 'value',
    render: (text, item) => {
      if (item.label.includes('deaths')) {
        return <Badge count={text} />
      }
      return <span>{text}</span>
    },
  },
];

export const NSWConfirmedCasesTable = () => {
  return (
    <>
      <Divider orientation="center">
          Status of confirmed cases
      </Divider>
      <Table
        columns={columns}
        dataSource={nswConfirmedCasesData}
        pagination={false}
        bordered
        tableLayout='fixed'
        size='small'
        />
    </>
  );
}