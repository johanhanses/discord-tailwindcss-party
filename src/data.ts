interface ServerData {
  serverId: string
  label: string
  categories: serverCategory[]
}

interface serverCategory {
  id: number
  label: string
  channels: serverChannel[]
}

export interface serverChannel {
  id: number
  label: string
  icon?: string
}

export const allData: ServerData[] = [
  {
    serverId: '1',
    label: 'Tailwind CSS',
    categories: [
      {
        id: 1,
        label: '',
        channels: [
          { id: 1, label: 'welcome', icon: 'Book' },
          { id: 2, label: 'announcements', icon: 'Speaker' }
        ]
      },
      {
        id: 2,
        label: 'Tailwind CSS',
        channels: [
          { id: 3, label: 'general' },
          { id: 4, label: 'plugins' },
          { id: 5, label: 'help' },
          { id: 6, label: 'internals' }
        ]
      },
      {
        id: 3,
        label: 'Tailwind Labs',
        channels: [
          { id: 7, label: 'tailwind-ui' },
          { id: 8, label: 'headless-ui' },
          { id: 9, label: 'refactoring-ui' },
          { id: 10, label: 'heroicons' }
        ]
      },
      {
        id: 4,
        label: 'Off topic',
        channels: [
          { id: 11, label: 'design' },
          { id: 12, label: 'development' },
          { id: 13, label: 'random' }
        ]
      },
      {
        id: 5,
        label: 'Community',
        channels: [
          { id: 14, label: 'jobs' },
          { id: 15, label: 'showcase' },
          { id: 16, label: 'bots' }
        ]
      }
    ]
  }
]
