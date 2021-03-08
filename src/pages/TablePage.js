import React, { createRef, useRef } from 'react'
import { Table, Icon, Tooltip, Popconfirm, Input, message as Message } from 'antd'
import basePageHOC from '../hoc/basePageHOC'
const { Column } = Table

const createRefCallback = data => data.map(() => ({ keyword: createRef(), price: createRef() }))
const data = [
    {
        name: 354,
        age: 222,
        sort: 3,
        sku: 100
    },
    {
        name: 111,
        age: 222,
        sort: 1,
        sku: 100
    },
    {
        name: 333,
        age: 444,
        sort: null,
        sku: 10
    },
]

const TablePage = () => {
    const keywordPriceRef = useRef(createRefCallback(data))
    return (
        <div className="table">
            <h1>this is table page~</h1>
            <Table
                dataSource={data}
                rowKey="name"
            >
                <Column
                    width={50}
                    key="sort"
                    dataIndex="sort"
                    title="排序"
                    render={(text, record, index) => {
                        const color = !record.sku ? 'rgba(0,0,0,.3)' : '#7AD04E'
                        const sortTitle = text ? `排序: ${text}` : '排序'
                        const sortText = record.sort ? record.sort : '---'
                        return (
                            <Popconfirm
                                disabled={!record.sku}
                                title={
                                    <Input
                                        ref={keywordPriceRef.current[index]?.keyword}
                                        placeholder="請輸入順序"
                                        defaultValue={record.sort}
                                        prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        maxLength={100}
                                    />
                                }
                                onVisibleChange={() => {
                                    setTimeout(
                                        () => keywordPriceRef.current[index]?.keyword.current?.select(),
                                        0
                                    )
                                }}
                                okText="確定"
                                onConfirm={() => {
                                    console.log(keywordPriceRef.current[index]?.keyword.current?.state.value);
                                    if (!keywordPriceRef.current[index]?.keyword.current?.state.value) {
                                        Message.warn('請輸入【排序順序】')
                                        console.log('gg');
                                    }
                                }}
                                cancelText="取消"
                                onCancel={() => {
                                    console.log('cancel');
                                }}
                            >
                                <Tooltip
                                    placement="bottom"
                                    title={sortTitle}
                                    style={{ color }}
                                >
                                    <Icon
                                        type="form"
                                        style={{ color, marginRight: '7px' }}
                                    />
                                    <span style={{ color, marginRight: '8px' }}>
                                        {sortText}
                                    </span>
                                </Tooltip>
                            </Popconfirm>
                        )
                    }}
                />
                <Column
                    width={20}
                    key="name"
                    dataIndex="name"
                    title="555"
                    render={text => <span>{text}</span>}
                />
                <Column
                    width={20}
                    key="age"
                    dataIndex="age"
                    title="666"
                    render={(text) => (
                        <div>{text}</div>
                    )}
                />
            </Table>
        </div>
    )
};

export default basePageHOC(TablePage);
