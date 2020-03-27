import { Table } from 'antd';
import ausConfirmedCases from '../../data/aus_confirmed.json';

const toNumber = (str) => parseInt(str.replace(',', ''));

const columns = [
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Confirmed Cases*',
    dataIndex: 'cases',
    key: 'cases',
    defaultSortOrder: '',
    sorter: (a, b) => toNumber(a.cases) - toNumber(b.cases),
  },
];

export const AusCases = () => {
  const total = ausConfirmedCases.pop();
  return (
    <Table
      columns={columns}
      dataSource={ausConfirmedCases}
      pagination={false}
      summary={() => (
        <tr>
          <th>{total.location}</th>
          <th>{total.cases}</th>
        </tr>
        ) }
    />
  );
}