export const colors = {
    background: '#09090B',
    surface: '#111827',
    card: '#1F2937',
    primary: '#38BDF8',
    primaryPressed: '#0EA5E9',
    accent: '#22D3EE',
    success: '#10B981',
    warning: '#F59E0B',
    danger: '#EF4444',
    text: '#F8FAFC',
    subtitle: '#CBD5E1',
    caption: '#94A3B8',
    divider: '#334155',
} as const;

export type ColorKey = keyof typeof colors;