export const dynamic = "force-dynamic";
export const revalidate = 0;

import prisma from "@/lib/prisma";
import { NewTodo } from "@/components/NewTodo";
import { TodosGrid } from "@/todos/components/TodosGrid";

export const metadata = {
  title: "Listado de todos",
  description: "SEO Title",
};

export default async function RestTodoPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}
