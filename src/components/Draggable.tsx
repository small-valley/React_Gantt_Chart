import React from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Define the types for draggable and droppable items
interface DraggableItem {
    id: string;
    type: string;
}

// Draggable component
export const DraggableComponent: React.FC<{ id: string; name: string }> = ({
    id,
    name,
}) => {
    const [{ isDragging }, drag] = useDrag({
        type: "draggable",
        item: { id, type: "draggable" },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: "pointer",
                border: "1px dashed #000",
                padding: "0.5rem",
                marginBottom: "0.5rem",
            }}
        >
            {name}
        </div>
    );
};

// Droppable component
export const DroppableComponent: React.FC<{
    onDrop: (id: string) => void;
    height: number;
}> = ({
    onDrop,
    height,
    // children
}) => {
    const [{ isOver }, drop] = useDrop({
        accept: "draggable",
        drop: (item: DraggableItem) => {
            onDrop(item.id);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <div
            ref={drop}
            style={{
                border: "2px solid #000",
                backgroundColor: isOver ? "lightgray" : "transparent",
                width: "100%",
                height: height,
                marginTop: -1 * height,
            }}
        ></div>
    );
};

// App component
const App: React.FC = () => {
    const handleDrop = (id: string) => {
        console.log(`Item dropped with ID: ${id}`);
        // Perform any actions when item is dropped on the droppable area
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                <DroppableComponent onDrop={handleDrop} height={100}>
                    {/* This is where you can render the droppable components */}
                </DroppableComponent>
                <DraggableComponent id="1" name="Draggable 1" />
                <DraggableComponent id="2" name="Draggable 2" />
                <DraggableComponent id="3" name="Draggable 3" />
            </div>
        </DndProvider>
    );
};

export default App;
