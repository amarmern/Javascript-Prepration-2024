export interface Task {
  id: number;
  title: string;
  description: string;
  completed: string;
}

router.post((req: Request, res: Response) => {
  const task: Task = {
    id: task.length + 1,
    title: req.body.title,
    description: req.body.description,
    completed: false,
  };

  tesk.push(task);

  res.status(201).json(task);
});
