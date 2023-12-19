import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    name: "Tunde Otaiku",
    position: "C",
    averages: 5,
  },
  {
    key: "2",
    name: "CJ",
    position: "PF",
    averages: 4.5,
  },
  {
    key: "3",
    name: "Micheal Ervin",
    position: "SF",
    averages: 4,
  },
  {
    key: "4",
    name: "Will Champion",
    position: "C",
    averages: 4,
  },
];

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "position",
    label: "POSITION",
  },
  {
    key: "averages",
    label: "RPG",
  },
];

const Rebounds = () => {
  return (
    <div className="flex flex-col justify-center border-2 mt-24">
      <h1 className="text-center">REBOUNDS</h1>
      <Table aria-label="Leader board">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Rebounds;
