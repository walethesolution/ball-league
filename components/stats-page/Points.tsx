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
    name: "Dariel Soriano",
    position: "SG",
    averages: 6,
  },
  {
    key: "2",
    name: "Alex Odita",
    position: "PF",
    averages: 5.5,
  },
  {
    key: "3",
    name: "Will Champion",
    position: "C",
    averages: 5,
  },
  {
    key: "4",
    name: "Rodger Salmon",
    position: "SG",
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
    label: "PPG",
  },
];

const Points = () => {
  return (
    <div className="flex flex-col justify-center rounded-md border-2 mt-24">
      <h1 className="text-center">POINTS</h1>
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

export default Points;
