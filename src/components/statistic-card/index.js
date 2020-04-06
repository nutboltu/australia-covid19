import { Card, Statistic, List } from 'antd';
import { FaHeartbeat } from 'react-icons/fa';

const data = [
    {
        state: 'NSW',
        cases: 40,
    },
    {
        state: 'NSW',
        cases: 40,
    },
    {
        state: 'NSW',
        cases: 40,
    },
    {
        state: 'NSW',
        cases: 40,
    },
    {
        state: 'NSW',
        cases: 40,
    },
];

export const StatisticCard = () => {

    return (
        <Card title={<Statistic
            valueStyle={{
                color: '#44D56C',
                border: '#44D56C 1px solid',
                padding: '10px 20px',
                display: 'inline-flex',
                borderRadius: '2px',
            }}
            value={443}
        />}
        extra={<div className='statistic-card-icon'><div><FaHeartbeat /></div><div>Current Cases Intensive care unit</div></div>}
        // extra={<FaHeartbeat />}
        >
            {/* <div className='statistic-card-content'>
                
                <div className='statistic-card-icon'>
                    
                </div>
            </div> */}
            <List
                size="small"
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => <List.Item>
                    <div className='statistic-card-content'>
                        <div> {item.state}</div>
                        <div>{item.cases}</div>
                    </div>
                </List.Item>}
            />
            <div>
            
            </div>
        </Card>
    )
}