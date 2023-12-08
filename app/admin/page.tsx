"use client";
import React, { useState } from "react";
import prisma from "@/prisma/client";
import { ITagAttached } from "@/models/tag/tag.model";
import { Table, Text } from "@radix-ui/themes";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from "../components/Button";

const AdminPage = async () => {
  const [tags, setTags] = useState<ITagAttached[]>([]);
  await prisma.tag.findMany({}).then((tags) => {
    setTags(tags);
  });

  const handleDeleteTag = async (id: number) => {
    await prisma.tag.delete({ where: { id } });
    setTags(tags.filter((tag) => tag.id !== id));
  };

  return (
    <div className="space-y-3">
      <Text>
        <h1>Admin Page</h1>
      </Text>
      <Button>New Tag</Button>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tags.map((tag) => (
            <Table.Row key={tag.id}>
              <Table.Cell>{tag.name}</Table.Cell>
              <Table.Cell>
                <FaRegTrashAlt onClick={() => handleDeleteTag(tag.id)} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default AdminPage;
