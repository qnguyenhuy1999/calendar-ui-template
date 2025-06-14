const APIEvents = [
  {
    id: "event-001",
    title: "Team Standup Meeting",
    description: "Daily standup with engineering team",
    startDate: "2025-06-10T09:00:00",
    endDate: "2025-06-30T09:30:00",
    type: "event",
    recurrence: {
      frequency: "DAILY",
      byDay: ["MO", "SA", "SU"],
    },
    client: null,
  },
  {
    id: "event-002",
    title: "First Session with Alex Stan",
    description: "First session with Alex Stan",
    startDate: "2025-06-14T09:00:00",
    endDate: "2025-06-14T09:30:00",
    type: "appointment",
    recurrence: null,
    client: {
      name: "Alice Nguyen",
      email: "alice@example.com",
      avatar:
        "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20person%20with%20neutral%20expression%20on%20a%20light%20blue%20background%2C%20high%20quality%20professional%20photo%2C%20business%20portrait&width=40&height=40&seq=avatar1&orientation=squarish",
      webURL: "https://alice.example.com",
    },
  },
  {
    id: "event-003",
    title: "Follow-up Session with Ben Tran",
    description: "Recurring check-in with Ben Tran",
    startDate: "2025-06-14T13:00:00",
    endDate: "2025-06-14T13:30:00",
    type: "event",
    client: null,
  },
  {
    id: "event-004",
    title: "Follow-up Session with Huy Nguyen",
    description: "Recurring check-in with Huy Nguyen",
    startDate: "2025-06-14T15:00:00",
    endDate: "2025-06-14T15:30:00",
    type: "event",
    client: null,
  },
  {
    id: "event-005",
    title: "One-time Session with Carol Vu",
    description: "Initial consultation with Carol Vu",
    startDate: "2025-06-15T10:00:00",
    endDate: "2025-06-15T10:30:00",
    type: "appointment",
    recurrence: null,
    client: {
      name: "Carol Vu",
      email: "carol@example.com",
      avatar:
        "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20person%20with%20neutral%20expression%20on%20a%20light%20blue%20background%2C%20high%20quality%20professional%20photo%2C%20business%20portrait&width=40&height=40&seq=avatar4&orientation=squarish",
      webURL: "https://carol.example.com",
    },
  },
  {
    id: "event-006",
    title: "Follow-up Session with David Kim",
    description: "Recurring check-in with David Kim",
    startDate: "2025-06-16T11:00:00",
    endDate: "2025-06-16T11:30:00",
    type: "event",
    recurrence: {
      frequency: "WEEKLY",
      byDay: ["MO", "WE", "FR"],
    },
    client: null,
  },
  {
    id: "event-007",
    title: "One-time Session with Emily Ha",
    description: "Initial consultation with Emily Ha",
    startDate: "2025-06-17T09:00:00",
    endDate: "2025-06-17T09:30:00",
    type: "appointment",
    recurrence: null,
    client: {
      name: "Emily Ha",
      email: "emily@example.com",
      avatar:
        "https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20person%20with%20neutral%20expression%20on%20a%20light%20blue%20background%2C%20high%20quality%20professional%20photo%2C%20business%20portrait&width=40&height=40&seq=avatar6&orientation=squarish",
      webURL: "https://emily.example.com",
    },
  },
  {
    id: "event-008",
    title: "Follow-up Session with Frank Le",
    description: "Recurring check-in with Frank Le",
    startDate: "2025-06-18T10:00:00",
    endDate: "2025-06-18T10:30:00",
    type: "event",
    recurrence: {
      frequency: "WEEKLY",
      byDay: ["MO", "WE", "FR"],
    },
    client: null,
  },
];

export { APIEvents };
