import Router from "next/router";
import { message } from 'antd';

export const routeTo = (code) => {
    const path = `/${code.toLowerCase()}`;
    const routePaths = ['/nsw', '/vic', '/qld'];
    if (routePaths.includes(path)) {
      Router.push(path).then(() => {
          window.scrollTo(0, 0);
      });
    } else {
      message.warning('NSW, VIC and QLD statistics are availabe now')
    }
}