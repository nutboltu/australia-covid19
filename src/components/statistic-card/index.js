import { Card, Statistic } from 'antd';
import { nFormatter } from '../../utils/number';

export const StatisticCard = ({ title, total, icon, children }) => {
    return (
        <Card
          title={
            <Statistic
              valueStyle={{
                  color: '#13c2c2',
                  background: '#e6fffb',
                  border: '#87e8de 1px solid',
                  padding: '10px 20px',
                  display: 'inline-flex',
                  borderRadius: '2px',
              }}
              value={nFormatter(total.tested)}
          />}
          extra={
            <div className='statistic-card-icon'>
              <div>
                {icon}
              </div>
              {title}
            </div>}
          className='statistic-card'
        >
            {children}
        </Card>
    )
}
