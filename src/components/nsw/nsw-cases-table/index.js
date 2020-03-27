import { Table, Divider } from 'antd';
import nswCasesData from '../../../data/nsw/cases.json';

const columns = [
  {
    title: 'Cases',
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

export const NSWCasesTable = () => {
  return (
    <>
      <Divider orientation="center">
          Current cases*
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