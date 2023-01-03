
export interface linkType {
  link:{
    id: number,
    icon: string,
    title: string,
    link: string
  }[]
}

export const customers:linkType["link"] = [
  {
    id: 1,
    icon: "users",
    title: "Users",
    link: "/users"
  },
  {
    id: 2,
    icon: "guarantor",
    title: "Guarantors",
    link: "/invalid"
  },
  {
    id: 3,
    icon: "loans",
    title: "Loans",
    link: "/invalid"
  },
  {
    id: 4,
    icon: "handshake",
    title: "Decision Models",
    link: "/invalid"
  },
  {
    id: 5,
    icon: "piggy-bank",
    title: "Savings",
    link: "/invalid"
  },
  {
    id: 6,
    icon: "loan-request",
    title: "Loan Requests",
    link: "/invalid"
  },
  {
    id: 7,
    icon: "whitelist",
    title: "Whitelist",
    link: "/invalid"
  },
  {
    id: 8,
    icon: "karma",
    title: "Karma",
    link: "/invalid"
  }  
]

export const businesses:linkType["link"] = [
  {
    id: 1,
    icon: "briefcase",
    title: "Organization",
    link: "/invalid"
  },
  {
    id: 2,
    icon: "loan-request",
    title: "Loan Products",
    link: "/invalid"
  },
  {
    id: 3,
    icon: "np_bank",
    title: "Savings Products",
    link: "/invalid"
  },
  {
    id: 4,
    icon: "coins-solid",
    title: "Fees and Charges",
    link: "/invalid"
  },
  {
    id: 5,
    icon: "transaction",
    title: "Transactions",
    link: "/invalid"
  },
  {
    id: 6,
    icon: "galaxy",
    title: "Services",
    link: "/invalid"
  },
  {
    id: 7,
    icon: "user-cog",
    title: "Service Account",
    link: "/invalid"
  },
  {
    id: 8,
    icon: "scroll",
    title: "Settlements",
    link: "/invalid"
  },
  {
    id: 9,
    icon: "chart-bar",
    title: "Reports",
    link: "/invalid"
  } 
]

export const settings:linkType["link"] = [
  {
    id: 1,
    icon: "sliders-h",
    title: "Preferences",
    link: "/invalid"
  },
  {
    id: 2,
    icon: "badge-percent",
    title: "Fees and Pricing",
    link: "/invalid"
  },
  {
    id: 3,
    icon: "clipboard-list",
    title: "Audit Logs",
    link: "/invalid"
  },
  {
    id: 4,
    icon: "tire",
    title: "System Messages",
    link: "/invalid"
  }  
]