import { addDays, subDays } from "date-fns";
import type { Board } from "src/types/kanban";

const now = new Date();

const board: Board = {
  members: [
    {
      id: "5e86809283e28b96d2d38537",
      avatar: "/assets/avatars/avatar-anika-visser.png",
      name: "Anika Visser",
    },
    {
      id: "5e887a62195cc5aef7e8ca5d",
      avatar: "/assets/avatars/avatar-marcus-finn.png",
      name: "Marcus Finn",
    },
    {
      id: "5e887ac47eed253091be10cb",
      avatar: "/assets/avatars/avatar-carson-darrin.png",
      name: "Carson Darrin",
    },
    {
      id: "5e887b209c28ac3dd97f6db5",
      avatar: "/assets/avatars/avatar-fran-perez.png",
      name: "Fran Perez",
    },
    {
      id: "5e887b7602bdbc4dbb234b27",
      avatar: "/assets/avatars/avatar-jie-yan-song.png",
      name: "Jie Yan Song",
    },
  ],
  columns: [
    {
      id: "5e849c39325dc5ef58e5a5db",
      taskIds: [
        "5e849c8708bd72683b454747",
        "5e849c90fabe1f1f4b3557f6",
        "5e849c977ef6265938bfd90b",
        "5e849c9e34ee93bc7255c599",
      ],
      name: "Todo",
    },
    {
      id: "5e849c2b38d238c33e5146755",
      taskIds: [],
      name: "Done",
    },
  ],
  tasks: [
    {
      id: "5e849c8708bd72683b454747",
      assigneesIds: [],
      attachments: [],
      authorId: "5e86809283e28b96d2d38537",
      checklists: [],
      comments: [
        {
          id: "15e849c5a35d4dff4f88ebff6",
          authorId: "5e887ac47eed253091be10cb",
          createdAt: subDays(now, 5).getTime(),
          message: "This is a comment",
        },
      ],
      columnId: "5e849c39325dc5ef58e5a5db",
      description: "Get Train Tickets",
      due: addDays(now, 7).getTime(),
      isSubscribed: false,
      labels: ["Train"],
      name: "Get Train Tickets",
    },
    {
      id: "5e849c977ef6265938bfd90b",
      assigneesIds: [],
      attachments: [],
      authorId: "5e887b7602bdbc4dbb234b27",
      checklists: [],
      columnId: "5e849c39325dc5ef58e5a5db",
      comments: [],
      description:
        "We need to make it aggressive with pricing because it’s in their interest to acquire us",
      due: null,
      isSubscribed: false,
      labels: [],
      name: "Change the height of the top bar because it looks too chunky",
    },
    {
      id: "5e849c9e34ee93bc7255c599",
      assigneesIds: ["5e887ac47eed253091be10cb", "5e86809283e28b96d2d38537"],
      attachments: [],
      authorId: "5e887a62195cc5aef7e8ca5d",
      checklists: [],
      columnId: "5e849c39325dc5ef58e5a5db",
      comments: [],
      description:
        "We need to make it aggressive with pricing because it’s in their interest to acquire us",
      due: null,
      isSubscribed: false,
      labels: [],
      name: "Integrate Stripe API",
    },
    {
      id: "5e849ca7d063dc3830d4b49c",
      assigneesIds: ["5e887a62195cc5aef7e8ca5d"],
      attachments: [],
      authorId: "5e887ac47eed253091be10cb",
      checklists: [],
      columnId: "5e849c2b38d238c33e516755",
      comments: [],
      description:
        "We need to make it aggressive with pricing because it’s in their interest to acquire us",
      due: null,
      isSubscribed: true,
      labels: [],
      name: "Update the customer API for payments",
    },
    {
      id: "5e849cb5d0c6e8894451fdfa",
      assigneesIds: [],
      attachments: [],
      authorId: "5e887ac47eed253091be10cb",
      checklists: [],
      columnId: "5e849c2b38d238c33e516755",
      comments: [],
      description:
        "We need to make it aggressive with pricing because it’s in their interest to acquire us",
      due: null,
      isSubscribed: true,
      labels: [],
      name: "Redesign the landing page",
    },
  ],
};

export const data = {
  board,
};
