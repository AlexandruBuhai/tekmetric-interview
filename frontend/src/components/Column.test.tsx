import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Column from './Column';
import { DragDropContext } from '@hello-pangea/dnd';
describe('testing Column', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should render a column', async () => {
    render(
      <DragDropContext onDragEnd={() => {}}>
        <Column
          title="Dogs1"
          droppableId="dogsOne"
          children={<div>Hello</div>}
        />
      </DragDropContext>
    );

    const dogList = await screen.findByTestId('dog-list');
    expect(dogList).toBeInTheDocument();

    const title = await screen.findByText('Dogs1');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Dogs1');

    const children = await screen.findByText('Hello');
    expect(children).toBeInTheDocument();
    expect(children).toHaveTextContent('Hello');
  });
});
