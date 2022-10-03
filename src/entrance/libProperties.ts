import antd, { TestExport } from 'components';

const toExport = { ...antd, TestExport };

export type LibProperties = typeof toExport;

export default toExport;
