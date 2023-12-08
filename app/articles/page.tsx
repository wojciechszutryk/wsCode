import prisma from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import Button from "../components/Button";

const ArticlesPage = async () => {
  const articles = await prisma.article.findMany();
  return (
    <div>
      <div className="mb-5">
        <Button>
          <Link href="/articles/new">new article</Link>
        </Button>
      </div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>author</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>publishedAt</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>updatedAt</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {articles.map((article) => (
            <Table.Row key={article.id}>
              <Table.Cell>{article.title}</Table.Cell>
              <Table.Cell>{article.description}</Table.Cell>
              <Table.Cell>{article.authorId}</Table.Cell>
              <Table.Cell>{article.createdAt.toLocaleDateString()}</Table.Cell>
              <Table.Cell>{article.updatedAt.toLocaleDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default ArticlesPage;
