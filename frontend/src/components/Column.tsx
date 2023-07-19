import { Droppable, DroppableProvided } from '@hello-pangea/dnd';

type ColumnProps = {
  title: string;
  droppableId: string;
  children: React.ReactNode;
};

const Column = ({ title, droppableId, children }: ColumnProps) => {
  return (
    <div
      className="flex min-w-[70%] max-w-[350px] flex-col"
      data-testid="dog-list"
    >
      <h2 className="mx-5 mb-2 text-2xl font-bold capitalize text-green-100">
        {title}
      </h2>
      <Droppable droppableId={droppableId}>
        {(provided: DroppableProvided) => (
          <div ref={provided.innerRef} className="h-screen">
            <div className="mx-2 flex h-fit flex-col gap-y-3 rounded-md bg-green-200 bg-opacity-30 p-5">
              {children}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
