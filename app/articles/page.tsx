import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const ArticlesPage = () => {
  return (
    <div>
      <Button>
        <Link href="/articles/new">new article</Link>
      </Button>
    </div>
  );
};

export default ArticlesPage;
