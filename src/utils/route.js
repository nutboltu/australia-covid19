import Router from "next/router";
import { message } from 'antd';

export const routeTo = (code) => {
    const path = `/${code.toLowerCase()}`;
    const routePaths = ['/nsw', '/vic', '/qld', '/sa', '/nt', '/act', '/wa', '/tas'];
    if (routePaths.includes(path)) {
      Router.push(path).then(() => {
          window.scrollTo(0, 0);
      });
    } else {
      message.warning('Statistics for this state is not availabe')
    }
}