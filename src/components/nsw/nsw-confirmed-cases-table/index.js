import { Table, Divider } from 'antd';
import nswConfirmedCasesData from '../../../data/nsw/confirmed.json';

const columns = [
  {
    title: 'Status',
    dataIndex: 'label',
    key: 'label',
    width: 350,
    render: text => <span>{text}</span>,
  },
  {
    title: 'Number of people',
    dataIndex: 'value',
    key: 'value',
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