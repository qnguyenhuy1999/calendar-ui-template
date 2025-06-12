const events = [
  {
    id: 1,
    title: "First Session with Alex Stan",
    start: new Date(2025, 5, 13, 9, 0),
    end: new Date(2025, 5, 13, 9, 30),
    extendedProps: {
      type: "appointment",
      hasVideoCall: true,
      client: {
        name: "Alex Stan",
        avatar:
          "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20person%20with%20neutral%20expression%20on%20a%20light%20blue%20background%2C%20high%20quality%20professional%20photo%2C%20business%20portrait&width=40&height=40&seq=avatar1&orientation=squarish",
      },
    },
    backgroundColor: "#FEF3C7",
    borderColor: "#F59E0B",
    textColor: "#92400E",
  },
  {
    id: 2,
    title: "Webinar: How to cope with trauma in professional life",
    start: new Date(2025, 5, 13, 11, 0),
    end: new Date(2025, 5, 13, 12, 0),
    extendedProps: {
      type: "webinar",
      hasVideoCall: false,
    },
    backgroundColor: "#DBEAFE",
    borderColor: "#3B82F6",
    textColor: "#1E40AF",
  },
  {
    id: 3,
    title: "First Session with Alex Stan",
    start: new Date(2025, 5, 13, 14, 0),
    end: new Date(2025, 5, 13, 14, 30),
    extendedProps: {
      type: "appointment",
      hasVideoCall: true,
      client: {
        name: "Alex Stan",
        avatar:
          "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20person%20with%20neutral%20expression%20on%20a%20light%20blue%20background%2C%20high%20quality%20professional%20photo%2C%20business%20portrait&width=40&height=40&seq=avatar2&orientation=squarish",
      },
    },
    backgroundColor: "#FEF3C7",
    borderColor: "#F59E0B",
    textColor: "#92400E",
  },
  {
    id: 4,
    title: "First Session with L",
    start: new Date(2025, 5, 7, 9, 0),
    end: new Date(2025, 5, 7, 9, 30),
    extendedProps: {
      type: "appointment",
      hasVideoCall: true,
    },
    backgroundColor: "#FEF3C7",
    borderColor: "#F59E0B",
    textColor: "#92400E",
  },
  {
    id: 5,
    title: "First Session with L",
    start: new Date(2025, 5, 5, 9, 0),
    end: new Date(2025, 5, 5, 9, 30),
    extendedProps: {
      type: "appointment",
      hasVideoCall: true,
    },
    backgroundColor: "#FEF3C7",
    borderColor: "#F59E0B",
    textColor: "#92400E",
  },
  {
    id: 6,
    title: "Customer Help Session",
    start: new Date(2025, 5, 12, 14, 0),
    end: new Date(2025, 5, 12, 15, 0),
    extendedProps: {
      type: "webinar",
      hasVideoCall: false,
    },
    backgroundColor: "#DBEAFE",
    borderColor: "#3B82F6",
    textColor: "#1E40AF",
  },
  {
    id: 7,
    title: "Customer Help Session",
    start: new Date(2025, 5, 12, 16, 0),
    end: new Date(2025, 5, 12, 17, 0),
    extendedProps: {
      type: "webinar",
      hasVideoCall: false,
    },
    backgroundColor: "#DBEAFE",
    borderColor: "#3B82F6",
    textColor: "#1E40AF",
  },
  {
    id: 8,
    title: "Orientation Session",
    start: new Date(2025, 5, 17, 10, 0),
    end: new Date(2025, 5, 17, 11, 0),
    extendedProps: {
      type: "webinar",
      hasVideoCall: false,
    },
    backgroundColor: "#DBEAFE",
    borderColor: "#3B82F6",
    textColor: "#1E40AF",
  },
  {
    id: 9,
    title: "Team Sync",
    start: new Date(2025, 5, 17, 14, 0),
    end: new Date(2025, 5, 17, 15, 0),
    extendedProps: {
      type: "webinar",
      hasVideoCall: false,
    },
    backgroundColor: "#DBEAFE",
    borderColor: "#3B82F6",
    textColor: "#1E40AF",
  },
];

export { events };
