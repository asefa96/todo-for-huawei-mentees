import { getConnection } from "typeorm";
import { Todo } from "../entities/todo";

export function getTodoRepository() {
    console.log('db ok')
    const conn = getConnection();
    const todoRepository = conn.getRepository(Todo);
    return todoRepository;
}
