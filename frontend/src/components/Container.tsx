import {
  DragDropContext,
  DraggableProvided,
  DraggableStateSnapshot,
  Draggable,
  DropResult,
} from '@hello-pangea/dnd';
import { Column, Card, type DogLists } from './index';

type ContainerProps = {
  list: DogLists;
  onDragEnd: (element: DropResult) => void;
};

const Container = ({ list, onDragEnd }: ContainerProps) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex min-w-[70%] justify-center p-3">
        <Column title="Will be petted" droppableId="beforePet">
          {list.beforePet.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id + ''} index={index}>
              {(
                provided: DraggableProvided,
                snapshot: DraggableStateSnapshot
              ) => (
                <div>
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card dogEntry={item} isDragging={snapshot.isDragging} />
                  </div>
                </div>
              )}
            </Draggable>
          ))}
        </Column>
        <Column title="Petted" droppableId="afterPet">
          {list.afterPet.map((item, index) => (
            <Draggable
              draggableId={item.id + ' after'}
              index={index}
              key={item.id}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <Card dogEntry={item} isDragging={snapshot.isDragging} />{' '}
                </div>
              )}
            </Draggable>
          ))}
        </Column>
      </div>
    </DragDropContext>
  );
};
export default Container;
