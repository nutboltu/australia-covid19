import { Card, Statistic } from 'antd';

export const StatisticCard = ({ title, icon, value, children }) => {
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
              value={value}
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
