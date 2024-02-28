export type CategoryEvent = {
  name: string;
  description: string;
};

export type Categories = "Exotica" | "Techtix" | "Quixine";

const events: Record<number, Record<Categories, Array<CategoryEvent>>> = {
  0: {
    "Exotica": [
      {
        name: "d0c1event1",
        description: "d1c1event1 description",
      },
      {
        name: "d0c1event2",
        description: "d1c1event2 description",
      },
      {
        name: "d0c1event3",
        description: "d1c1event3 description",
      },
      {
        name: "d1c1event4",
        description: "d1c1event4 description",
      },
      {
        name: "d1c1event5",
        description: "d1c1event5 description",
      },
      {
        name: "d1c1event6",
        description: "d1c1event6 description",
      },
      {
        name: "d1c1event7",
        description: "d1c1event7 description",
      },
      {
        name: "d1c1event8",
        description: "d1c1event8 description",
      },
      {
        name: "d1c1event9",
        description: "d1c1event9 description",
      },
      {
        name: "d1c1event10",
        description: "d1c1event10 description",
      },
      {
        name: "d1c1event11",
        description: "d1c1event11 description",
      },
      {
        name: "d1c1event12",
        description: "d1c1event12 description",
      },
      {
        name: "d1c1event13",
        description: "d1c1event13 description",
      },
      {
        name: "d1c1event14",
        description: "d1c1event14 description",
      },
      {
        name: "d1c1event15",
        description: "d1c1event15 description",
      },
      {
        name: "d1c1event16",
        description: "d1c1event16 description",
      },
      {
        name: "d1c1event17",
        description: "d1c1event17 description",
      },
      {
        name: "d1c1event18",
        description: "d1c1event18 description",
      },
      {
        name: "d1c1event19",
        description: "d1c1event19 description",
      },
      {
        name: "d1c1event20",
        description: "d1c1event20 description",
      },
    ],
    "Techtix": [
      {
        name: "d1c2event1",
        description: "d1c2event1 description",
      },
      {
        name: "d1c2event2",
        description: "d1c2event2 description",
      },
      {
        name: "d1c2event3",
        description: "d1c2event3 description",
      },
      {
        name: "d1c2event4",
        description: "d1c2event4 description",
      },
      {
        name: "d1c2event5",
        description: "d1c2event5 description",
      },
      {
        name: "d1c2event6",
        description: "d1c2event6 description",
      },
    ],
    "Quixine": [
      {
        name: "d1c3event1",
        description: "d1c3event1 description",
      },
      {
        name: "d1c3event2",
        description: "d1c3event2 description",
      },
      {
        name: "d1c3event3",
        description: "d1c3event3 description",
      },
      {
        name: "d1c3event4",
        description: "d1c3event4 description",
      },
    ],
  },
  1: {
    "Exotica": [
      {
        name: "d2c1event1",
        description: "d2c1event1 description",
      },
      {
        name: "d2c1event2",
        description: "d2c1event2 description",
      },
      {
        name: "d2c1event3",
        description: "d2c1event3 description",
      },
      {
        name: "d2c1event4",
        description: "d2c1event4 description",
      },
    ],
    "Techtix": [
      {
        name: "d2c2event1",
        description: "d2c2event1 description",
      },
      {
        name: "d2c2event2",
        description: "d2c2event2 description",
      },
      {
        name: "d2c2event3",
        description: "d2c2event3 description",
      },
      {
        name: "d2c2event4",
        description: "d2c2event4 description",
      },
    ],
    "Quixine": [
      {
        name: "d2c3event1",
        description: "d2c3event1 description",
      },
      {
        name: "d2c3event2",
        description: "d2c3event2 description",
      },
      {
        name: "d2c3event3",
        description: "d2c3event3 description",
      },
      {
        name: "d2c3event4",
        description: "d2c3event4 description",
      },
    ],
  },
  2: {
    "Exotica": [
      {
        name: "d3c1event1",
        description: "d3c1event1 description",
      },
      {
        name: "d3c1event2",
        description: "d3c1event2 description",
      },
      {
        name: "d3c1event3",
        description: "d3c1event3 description",
      },
      {
        name: "d3c1event4",
        description: "d3c1event4 description",
      },
    ],
    "Techtix": [
      {
        name: "d3c2event1",
        description: "d3c2event1 description",
      },
      {
        name: "d3c2event2",
        description: "d3c2event2 description",
      },
      {
        name: "d3c2event3",
        description: "d3c2event3 description",
      },
      {
        name: "d3c2event4",
        description: "d3c2event4 description",
      },
    ],
    "Quixine": [
      {
        name: "d3c3event1",
        description: "d3c3event1 description",
      },
      {
        name: "d3c3event2",
        description: "d3c3event2 description",
      },
      {
        name: "d3c3event3",
        description: "d3c3event3 description",
      },
      {
        name: "d3c3event4",
        description: "d3c3event4 description",
      },
    ],
  },
  3: {
    "Exotica": [
      {
        name: "d4c1event1",
        description: "d4c1event1 description",
      },
      {
        name: "d4c1event2",
        description: "d4c1event2 description",
      },
      {
        name: "d4c1event3",
        description: "d4c1event3 description",
      },
      {
        name: "d4c1event4",
        description: "d4c1event4 description",
      },
    ],
    "Techtix": [
      {
        name: "d4c2event1",
        description: "d4c2event1 description",
      },
      {
        name: "d4c2event2",
        description: "d4c2event2 description",
      },
      {
        name: "d4c2event3",
        description: "d4c2event3 description",
      },
      {
        name: "d4c2event4",
        description: "d4c2event4 description",
      },
    ],
    "Quixine": [
      {
        name: "d4c3event1",
        description: "d4c3event1 description",
      },
      {
        name: "d4c3event2",
        description: "d4c3event2 description",
      },
      {
        name: "d4c3event3",
        description: "d4c3event3 description",
      },
      {
        name: "d4c3event4",
        description: "d4c3event4 description",
      },
    ],
  },
  4: {
    "Exotica": [
      {
        name: "d4c1event1",
        description: "d4c1event1 description",
      },
      {
        name: "d4c1event2",
        description: "d4c1event2 description",
      },
      {
        name: "d4c1event3",
        description: "d4c1event3 description",
      },
      {
        name: "d4c1event4",
        description: "d4c1event4 description",
      },
    ],
    "Techtix": [
      {
        name: "d4c2event1",
        description: "d4c2event1 description",
      },
      {
        name: "d4c2event2",
        description: "d4c2event2 description",
      },
      {
        name: "d4c2event3",
        description: "d4c2event3 description",
      },
      {
        name: "d4c2event4",
        description: "d4c2event4 description",
      },
    ],
    "Quixine": [
      {
        name: "d4c3event1",
        description: "d4c3event1 description",
      },
      {
        name: "d4c3event2",
        description: "d4c3event2 description",
      },
      {
        name: "d4c3event3",
        description: "d4c3event3 description",
      },
      {
        name: "d4c3event4",
        description: "d4c3event4 description",
      },
    ],
  },
};

export default events;
