import { Scheduler, SchedulerData } from "@bitnoi.se/react-scheduler";
import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { createRoot } from "react-dom/client";
import { DraggableComponent, DroppableComponent } from "./components/Draggable";

export default function Component() {
    const [filterButtonState, setFilterButtonState] = useState(0);
    const isLoading = false;
    const handleDrop = (id: string) => {
        console.log(`Item dropped with ID: ${id}`);
        // Perform any actions when item is dropped on the droppable area
    };

    useEffect(() => {
        const result = document.getElementsByClassName("sc-hhyLtv");
        console.log(result);
        for (let item of result) {
            // console.log(item);
            // Create a container for the DroppableComponent
            const container = document.createElement("div");
            item.appendChild(container);
            const height = (item as HTMLElement).offsetHeight;

            // Render DroppableComponent inside the container
            const root = createRoot(container);
            root.render(
                <DndProvider backend={HTML5Backend}>
                    <DroppableComponent onDrop={handleDrop} height={height} />
                </DndProvider>
            );
        }
    }, [filterButtonState]);

    return (
        <DndProvider backend={HTML5Backend}>
            <section>
                <Scheduler
                    data={mockDMAdata}
                    isLoading={isLoading}
                    onRangeChange={(newRange) => console.log(newRange)}
                    onTileClick={(clickedResource) =>
                        console.log(clickedResource)
                    }
                    onItemClick={(item) => console.log(item)}
                    onFilterData={() => {
                        // Some filtering logic...
                        setFilterButtonState(1);
                    }}
                    onClearFilterData={() => {
                        // Some clearing filters logic...
                        setFilterButtonState(0);
                    }}
                    config={{
                        zoom: 0,
                        filterButtonState,
                    }}
                />
            </section>
            <section
                style={{
                    position: "absolute",
                    bottom: "15%",
                    left: "50%",
                    zIndex: 100,
                }}
            >
                <div>
                    {/* <DroppableComponent onDrop={handleDrop}>
                    </DroppableComponent> */}
                    <DraggableComponent id="1" name="Draggable 1" />
                    <DraggableComponent id="2" name="Draggable 2" />
                    <DraggableComponent id="3" name="Draggable 3" />
                </div>
            </section>
        </DndProvider>
    );
}

const mockDMAdata: SchedulerData = [
    {
        id: "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
        label: {
            icon: "https://picsum.photos/24",
            title: "E1-0923",
            subtitle: "facebook evening",
        },
        data: [
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
                startDate: new Date("2023-09-25T00:00:00.000Z"),
                endDate: new Date("2023-10-13T00:00:00.000Z"),
                occupancy: 3600,
                title: "Digital Martketing 1",
                subtitle: "Mariam",
                description: "Mon, Tue, Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3763",
                startDate: new Date("2023-10-15T00:00:00.000Z"),
                endDate: new Date("2023-11-03T00:00:00.000Z"),
                occupancy: 3600,
                title: "Digital Martketing 2",
                subtitle: "Mariam",
                description: "Mon, Tue, Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3764",
                startDate: new Date("2023-11-06T00:00:00.000Z"),
                endDate: new Date("2023-11-24T00:00:00.000Z"),
                occupancy: 3600,
                title: "WordPress",
                subtitle: "Mariam",
                description: "Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3765",
                startDate: new Date("2023-11-06T00:00:00.000Z"),
                endDate: new Date("2023-11-24T00:00:00.000Z"),
                occupancy: 3600,
                title: "Design",
                subtitle: "Brian",
                description: "Mon, Tue, Wed",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3766",
                startDate: new Date("2023-11-27T00:00:00.000Z"),
                endDate: new Date("2023-12-15T00:00:00.000Z"),
                occupancy: 3600,
                title: "SEO",
                subtitle: "Brian",
                description: "Mon, Tue, Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3767",
                startDate: new Date("2023-12-18T00:00:00.000Z"),
                endDate: new Date("2024-01-01T00:00:00.000Z"),
                occupancy: 3600,
                title: "Break",
                subtitle: "",
                description: "",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3768",
                startDate: new Date("2024-01-02T00:00:00.000Z"),
                endDate: new Date("2024-01-19T00:00:00.000Z"),
                occupancy: 3600,
                title: "Analytics",
                subtitle: "Brian",
                description: "Mon, Tue, Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3769",
                startDate: new Date("2024-01-22T00:00:00.000Z"),
                endDate: new Date("2024-02-09T00:00:00.000Z"),
                occupancy: 3600,
                title: "Social Media",
                subtitle: "Rodrigo",
                description: "Mon, Tue, Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3770",
                startDate: new Date("2024-02-12T00:00:00.000Z"),
                endDate: new Date("2024-03-22T00:00:00.000Z"),
                occupancy: 3600,
                title: "Campaign Management",
                subtitle: "Rodrigo",
                description: "Mon, Tue, Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
        ],
    },
    {
        id: "070ac5b5-8369-4cd2-8ba2-0a209130cc61",
        label: {
            icon: "https://picsum.photos/24",
            title: "E2-0923",
            subtitle: "youtube evening",
        },
        data: [
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3771",
                startDate: new Date("2023-09-25T00:00:00.000Z"),
                endDate: new Date("2023-10-13T00:00:00.000Z"),
                occupancy: 3600,
                title: "Digital Martketing 1",
                subtitle: "Mariam",
                description: "Mon, Tue, Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3772",
                startDate: new Date("2023-10-15T00:00:00.000Z"),
                endDate: new Date("2023-11-03T00:00:00.000Z"),
                occupancy: 3600,
                title: "Digital Martketing 2",
                subtitle: "Mariam",
                description: "Mon, Tue, Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3773",
                startDate: new Date("2023-11-06T00:00:00.000Z"),
                endDate: new Date("2023-11-24T00:00:00.000Z"),
                occupancy: 3600,
                title: "WordPress",
                subtitle: "Mariam",
                description: "Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3774",
                startDate: new Date("2023-09-25T00:00:00.000Z"),
                endDate: new Date("2023-10-13T00:00:00.000Z"),
                occupancy: 3600,
                title: "Digital Martketing 1",
                subtitle: "Mariam",
                description: "Mon, Tue, Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3775",
                startDate: new Date("2023-11-06T00:00:00.000Z"),
                endDate: new Date("2023-11-24T00:00:00.000Z"),
                occupancy: 3600,
                title: "Design",
                subtitle: "Brian",
                description: "Mon, Tue, Wed",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3776",
                startDate: new Date("2023-11-27T00:00:00.000Z"),
                endDate: new Date("2023-12-15T00:00:00.000Z"),
                occupancy: 3600,
                title: "SEO",
                subtitle: "Brian",
                description: "Mon, Tue, Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3777",
                startDate: new Date("2023-12-18T00:00:00.000Z"),
                endDate: new Date("2024-01-01T00:00:00.000Z"),
                occupancy: 3600,
                title: "Break",
                subtitle: "",
                description: "",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3778",
                startDate: new Date("2024-01-02T00:00:00.000Z"),
                endDate: new Date("2024-01-19T00:00:00.000Z"),
                occupancy: 3600,
                title: "Analytics",
                subtitle: "Brian",
                description: "Mon, Tue, Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3779",
                startDate: new Date("2024-01-22T00:00:00.000Z"),
                endDate: new Date("2024-02-09T00:00:00.000Z"),
                occupancy: 3600,
                title: "Social Media",
                subtitle: "Rodrigo",
                description: "Mon, Tue, Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3780",
                startDate: new Date("2024-02-12T00:00:00.000Z"),
                endDate: new Date("2024-03-22T00:00:00.000Z"),
                occupancy: 3600,
                title: "Campaign Management",
                subtitle: "Rodrigo",
                description: "Mon, Tue, Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
        ],
    },
];
