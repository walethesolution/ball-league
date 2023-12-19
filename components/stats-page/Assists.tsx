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
    name: "Olawale Ayejuyone",
    position: "PG",
    averages: 5.5,
  },
  {
    key: "2",
    name: "Quam Odesanya",
    position: "SF",
    averages: 4,
  },
  {
    key: "3",
    name: "Steve Liadi",
    position: "SG",
    averages: 3.5,
  },
  {
    key: "4",
    name: "Victor Ayodeji",
    position: "SG",
    averages: 3,
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
    label: "APG",
  },
];

const Assists = () => {
  return (
    <div className="flex flex-col justify-center border-2 mt-24">
      <h1 className="text-center">ASSISTS</h1>
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

export default Assists;
