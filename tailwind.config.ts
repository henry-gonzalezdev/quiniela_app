/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    important: true,
    content: [
        './src/**/*.{ts,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
                '3xl': '1716px'
            }
        },
        extend: {
            fontFamily: {
                sans: [
                    'Montserrat',
                    'sans-serif'
                ]
            },
            gridTemplateColumns: {
                sidebar: '250px minmax(0,1fr)',
                'sidebar-collapsed': '106px auto'
            },
            screens: {
                lg: '1040px',
                timeline: '1580px',
                '3xl': '1716px'
            },
            backgroundColor: {
                main: 'hsl(var(--background))',
                'main-hover': 'hsl(var(--background-hover) / 68%)'
            },
            borderColor: {
                dark: 'hsl(var(--border))'
            },
            colors: {
                'primary-gray': '#64748B',
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                'body-background': 'hsl(var(--body-background))',
                foreground: 'hsl(var(--foreground))',
                brand: {
                    text: {
                        DEFAULT: "var(--primary-brand-text)",
                    },
                    primary: {
                        DEFAULT: "var(--primary-brand)",
                        lighter: "var(--primary-brand-lighter)",
                        opaque: "var(--primary-brand-opaque)",
                        background: "var(--primary-brand-background)",
                    },
                    secondary: {
                        DEFAULT: "var(--secondary-brand)",
                        opaque: "var(--secondary-brand-opaque)",
                    },
                    sidebar: {
                        background: "var(--sidebar-background)",
                        text: "var(--sidebar-text)",
                        textAccent: "var(--sidebar-text-accent)",
                        iconsHover: "var(--sidebar-icons-hover)",
                    },
                },
                primary: {
                    DEFAULT: 'var(--primary)',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                sidebar: {
                    'text-accent': 'hsl(var(--sidebar-text-accent))',
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))',
                    text: 'hsl(var(--sidebar-text))',
                    background: 'hsl(var(--sidebar-background))'
                },
                state: {
                    open: {
                        DEFAULT: '#0d2418'
                    },
                    close: {
                        DEFAULT: '#340e10'
                    }
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            },
            height: {
                'main-content': 'var(--height-main-content)'
            }
        }
    },
    plugins: [require('tailwindcss-animate')]
}