import React from "react";
import { Table } from "antd";
import ItemActions from "@components/ItemActions";
import DATA from "@seeds/thcs/semesters.json";

const SemesterTable = () => {
  const { Column } = Table;

  return (
    <Table
      pagination={{
        showSizeChanger: true,
        pageSizeOptions: [8, 10, 15],
        defaultPageSize: 8,
      }}
      dataSource={DATA}
      rowKey={(record) => record.id}
    >
      <Column title="ID" dataIndex="id" key="id" sorter={true} />
      <Column title="Name" dataIndex="name" key="name" sorter={true} />
      <Column title="Begin" dataIndex="begin" key="begin" />
      <Column title="End" dataIndex="end" key="end" />
      <Column
        key="action"
        render={(text, record) => (
          <ItemActions
            name="niên khóa"
            onDelete={() => null}
            onEdit={() => null}
          />
        )}
      />
    </Table>
  );
};

export default SemesterTable;
