export interface TodoState {
  todos: Array<ITodo>;
  status: string;
}
export interface ITodo{
  id: string;
  name: string;
  status: string;
  date: string;
};
