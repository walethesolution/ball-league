"use client";

import React, { useMemo, useState, useCallback } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  User,
  Selection,
  SortDescriptor,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Avatar,
  AvatarIcon,
} from "@nextui-org/react";
import { playersData, columns, Player, positions } from "./playerdata";
import { SearchIcon } from "../common/SearchIcon";
import { ChevronDownIcon } from "../common/ChevronDownIcon";

const initialColumns = ["name", "position", "weight", "height", "nickname"];

type User = Player;

const PlayerTable: React.FC = () => {
  const [filterValue, setFilterValue] = useState("");
  const [positionFilter, setPositionFilter] = useState<Selection>("all");
  const [visibleColumns, setVisibleColumns] = useState<Selection>(
    new Set(initialColumns)
  );
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "position",
    direction: "ascending",
  });
  const [rowsPerPage, setRowPerPages] = useState(5);
  const [page, setPage] = useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = useMemo(() => {
    if (visibleColumns == "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filteredPlayers = [...playersData];

    if (hasSearchFilter) {
      filteredPlayers = filteredPlayers.filter((player) =>
        player.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    if (
      positionFilter !== "all" &&
      Array.from(positionFilter).length !== positions.length
    ) {
      filteredPlayers = filteredPlayers.filter((player) =>
        Array.from(positionFilter).includes(player.position)
      );
    }
    return filteredPlayers;
  }, [filterValue, hasSearchFilter, positionFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a: User, b: User) => {
      const first = a[sortDescriptor.column as keyof User] as number;
      const second = b[sortDescriptor.column as keyof User] as number;

      const comparison = first < second ? -1 : first > second ? 1 : 0;
      return sortDescriptor.direction == "descending"
        ? -comparison
        : comparison;
    });
  }, [sortDescriptor, items]);

  const renderCell = useCallback((user: User, columnKey: keyof User) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <div className="flex items-center gap-2">
            <div className="w-12 h-12">
              {user.imageSrc ? <Avatar src={user.imageSrc} /> : <AvatarIcon />}
            </div>
            <div>
              <p className="text-sm lg:text-base">{cellValue}</p>
            </div>
          </div>
        );

      case "position":
      case "height":
      case "weight":
      case "nickName":
        return (
          <div className="flex flex-col">
            <p className="text-bold capitalize">{cellValue}</p>
          </div>
        );

      default:
        return cellValue;
    }
  }, []);

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowPerPages(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const handleNameColumn = (selectedKeys: Selection) => {
    const selectedKeysArray = Array.from(selectedKeys);

    if (!selectedKeysArray.includes("name")) {
      selectedKeysArray.push("name");
    }
    setVisibleColumns(new Set(selectedKeysArray));
  };

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4 py-2 px-4">
        <div className="flex flex-col justify-center gap-3 items-end lg:flex-row">
          <Input
            isClearable
            className="w-3/4 lg:w-1/2 bg-[#D9D9D9] rounded-lg px-1 py-2"
            placeholder="Search by name..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="flex gap-2">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                  className="w-full bg-[#D9D9D9] rounded-lg px-2 py-2"
                >
                  Position
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={positionFilter}
                selectionMode="multiple"
                onSelectionChange={setPositionFilter}
                className="bg-[#D9D9D9] rounded-lg"
              >
                {positions.map((position) => (
                  <DropdownItem key={position.uid} className="capitalize ">
                    {position.uid}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="sm:flex gap-2">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                  className="w-full bg-[#D9D9D9] rounded-lg px-2 py-2"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={handleNameColumn}
                className="bg-[#D9D9D9] rounded-lg"
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {column.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 font-medium">
            Total {playersData.length} players
          </span>
          <label className="flex items-center text-default-400  font-medium">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 "
              onChange={onRowsPerChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    positionFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerChange,
    onClear,
  ]);

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-center items-center gap-4">
        <Pagination
          isCompact
          showControls
          showShadow
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="sm:flex w-[30%] justify-end flex gap-3 ">
          <div>
            <Button
              isDisabled={pages === 1}
              size="sm"
              variant="flat"
              onPress={onPreviousPage}
              className="bg-[#D9D9D9] px-2 py-2 rounded-lg"
            >
              Previous
            </Button>
          </div>
          <div>
            <Button
              isDisabled={pages === 1}
              size="sm"
              variant="flat"
              onPress={onNextPage}
              className="bg-[#D9D9D9] px-2 py-2 rounded-lg"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  }, [page, pages, onNextPage, onPreviousPage]);

  return (
    <div className="lg:mx-14 ">
      <Table
        aria-label="Players Table"
        isHeaderSticky
        classNames={{
          wrapper: "max-h-full",
        }}
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
        selectedKeys={selectedKeys}
        selectionMode="none"
        topContent={topContent}
        topContentPlacement="outside"
        onSelectionChange={setSelectedKeys}
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              allowsSorting={column.sortable}
              className="bg-[#D9D9D9]"
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No users found"} items={sortedItems}>
          {(item) => (
            <TableRow key={item.id} className="border-b text-sm lg:text-base">
              {(columnKey) => (
                <TableCell>
                  {renderCell(item, columnKey as keyof Player)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default PlayerTable;
