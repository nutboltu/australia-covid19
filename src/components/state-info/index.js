import React from 'react';
import { Card, Divider } from 'antd';
import { IoIosPeople, IoMdBeaker, IoMdPulse } from 'react-icons/io';
import { GiVirus } from 'react-icons/gi';
import { FaClinicMedical } from 'react-icons/fa';
import { FiPercent } from 'react-icons/fi';

export const StateInfo = ({ data }) => {
  return (
    <>
    <Divider orientation="center">
          Information board
      </Divider>
    <Card size="small" className="state-info">
      <div className="state-info-item info">
        <div className="state-info-item-key">
          <IoIosPeople />
          Population
        </div>
        <div className="state-info-item-value">{data.population.toLocaleString()}</div>
      </div>
      <div className="state-info-item success">
        <div className="state-info-item-key">
          <IoMdBeaker />
          Total Tested
        </div>
        <div className="state-info-item-value">{data.tested.toLocaleString()}</div>
      </div>
      <div className="state-info-item warning">
        <div className="state-info-item-key">
          <GiVirus />
          Confirmed
        </div>
        <div className="state-info-item-value"><span>{data.confirmed.toLocaleString()}</span></div>
      </div>
      <div className="state-info-item warning">
        <div className="state-info-item-key">
          <FaClinicMedical />
          Active Cases
        </div>
        <div className="state-info-item-value">{data.active.toLocaleString()}</div>
      </div>
      <div className="state-info-item danger">
        <div className="state-info-item-key">
          <IoMdPulse />
          Cases in ICU
        </div>
        <div className="state-info-item-value">{data.icu.toLocaleString()}</div>
      </div>
      <div className="state-info-item danger">
        <div className="state-info-item-key">
          <FiPercent />
          Cases / Tests
        </div>
        <div className="state-info-item-value">{data.positive}</div>
      </div>
    </Card>
    </>
  )
}