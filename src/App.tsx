import { Scheduler, SchedulerData } from "@bitnoi.se/react-scheduler";
import { useState } from "react";

export default function Component() {
    const [filterButtonState, setFilterButtonState] = useState(0);
    const isLoading = false;

    return (
        <section>
            <Scheduler
                data={mockDMAdata}
                isLoading={isLoading}
                onRangeChange={(newRange) => console.log(newRange)}
                onTileClick={(clickedResource) => console.log(clickedResource)}
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
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
                startDate: new Date("2023-10-15T00:00:00.000Z"),
                endDate: new Date("2023-11-03T00:00:00.000Z"),
                occupancy: 3600,
                title: "Digital Martketing 2",
                subtitle: "Mariam",
                description: "Mon, Tue, Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
                startDate: new Date("2023-11-06T00:00:00.000Z"),
                endDate: new Date("2023-11-24T00:00:00.000Z"),
                occupancy: 3600,
                title: "WordPress",
                subtitle: "Mariam",
                description: "Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
                startDate: new Date("2023-11-06T00:00:00.000Z"),
                endDate: new Date("2023-11-24T00:00:00.000Z"),
                occupancy: 3600,
                title: "Design",
                subtitle: "Brian",
                description: "Mon, Tue, Wed",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
                startDate: new Date("2023-11-27T00:00:00.000Z"),
                endDate: new Date("2023-12-15T00:00:00.000Z"),
                occupancy: 3600,
                title: "SEO",
                subtitle: "Brian",
                description: "Mon, Tue, Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
                startDate: new Date("2023-12-18T00:00:00.000Z"),
                endDate: new Date("2024-01-01T00:00:00.000Z"),
                occupancy: 3600,
                title: "Break",
                subtitle: "",
                description: "",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
                startDate: new Date("2024-01-02T00:00:00.000Z"),
                endDate: new Date("2024-01-19T00:00:00.000Z"),
                occupancy: 3600,
                title: "Analytics",
                subtitle: "Brian",
                description: "Mon, Tue, Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
                startDate: new Date("2024-01-22T00:00:00.000Z"),
                endDate: new Date("2024-02-09T00:00:00.000Z"),
                occupancy: 3600,
                title: "Social Media",
                subtitle: "Rodrigo",
                description: "Mon, Tue, Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
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
        id: "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
        label: {
            icon: "https://picsum.photos/24",
            title: "E2-0923",
            subtitle: "youtube evening",
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
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
                startDate: new Date("2023-10-15T00:00:00.000Z"),
                endDate: new Date("2023-11-03T00:00:00.000Z"),
                occupancy: 3600,
                title: "Digital Martketing 2",
                subtitle: "Mariam",
                description: "Mon, Tue, Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
                startDate: new Date("2023-11-06T00:00:00.000Z"),
                endDate: new Date("2023-11-24T00:00:00.000Z"),
                occupancy: 3600,
                title: "WordPress",
                subtitle: "Mariam",
                description: "Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
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
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
                startDate: new Date("2023-11-06T00:00:00.000Z"),
                endDate: new Date("2023-11-24T00:00:00.000Z"),
                occupancy: 3600,
                title: "Design",
                subtitle: "Brian",
                description: "Mon, Tue, Wed",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
                startDate: new Date("2023-11-27T00:00:00.000Z"),
                endDate: new Date("2023-12-15T00:00:00.000Z"),
                occupancy: 3600,
                title: "SEO",
                subtitle: "Brian",
                description: "Mon, Tue, Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
                startDate: new Date("2023-12-18T00:00:00.000Z"),
                endDate: new Date("2024-01-01T00:00:00.000Z"),
                occupancy: 3600,
                title: "Break",
                subtitle: "",
                description: "",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
                startDate: new Date("2024-01-02T00:00:00.000Z"),
                endDate: new Date("2024-01-19T00:00:00.000Z"),
                occupancy: 3600,
                title: "Analytics",
                subtitle: "Brian",
                description: "Mon, Tue, Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
                startDate: new Date("2024-01-22T00:00:00.000Z"),
                endDate: new Date("2024-02-09T00:00:00.000Z"),
                occupancy: 3600,
                title: "Social Media",
                subtitle: "Rodrigo",
                description: "Mon, Tue, Wed, Thur, Fri",
                bgColor: "rgb(254,165,177)",
            },
            {
                id: "8b71a8a5-33dd-4fc8-9caa-b4a584ba3762",
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
