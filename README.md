# Prototype Template

A clean starting point for building Tennr prototypes with Next.js, Tailwind CSS, and the Lasso component library.

## Quick Start

### 1. Create a new prototype

```bash
npx degit bmwar-tnnr/prototype-template my-prototype-name
cd my-prototype-name
```

### 2. Set up the project

```bash
./setup.sh
```

This will prompt you for a project name and configure everything.

### 3. Install dependencies & run

```bash
pnpm install
pnpm dev
```

Your prototype will be running at [http://localhost:3060](http://localhost:3060)

---

## Deploying to Vercel

### First time setup

1. Push your prototype to your GitHub account
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect the settings - just click "Deploy"

### Sharing with stakeholders

After deployment, Vercel gives you a URL like `my-prototype-name.vercel.app` that you can share with anyone.

---

## Project Structure

```
my-prototype/
├── app/                    # Next.js application
│   ├── src/
│   │   ├── app/           # Pages (add your routes here)
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx   # Home page
│   │   │   └── globals.css
│   │   └── components/
│   │       └── shell/     # App shell with sidebar
│   └── public/images/     # Static assets
├── lasso/                  # Tennr component library
└── vercel.json            # Deployment config
```

## Customizing Your Prototype

### Adding navigation items

Edit `app/src/components/shell/sidebar.tsx` and update the `navGroups` array:

```tsx
const navGroups: NavGroup[] = [
  {
    label: 'Main',
    items: [
      { label: 'Home', href: '/', icon: House },
      { label: 'Patients', href: '/patients', icon: Users },
      { label: 'Orders', href: '/orders', icon: Package },
    ],
  },
];
```

### Creating new pages

Add a new folder in `app/src/app/` with a `page.tsx` file:

```
app/src/app/patients/page.tsx     → /patients
app/src/app/orders/page.tsx       → /orders
app/src/app/orders/[id]/page.tsx  → /orders/123
```

### Using Lasso components

Import components from `@tennr/lasso`:

```tsx
import { Button } from '@tennr/lasso/button';
import { Card, CardHeader, CardContent } from '@tennr/lasso/card';
import { Input } from '@tennr/lasso/input';
import { Badge } from '@tennr/lasso/badge';
```

---

## Available Lasso Components

- Accordion, Alert, Avatar, Badge, Breadcrumb, Button
- Calendar, Card, Carousel, Chart, Checkbox, Collapsible
- Combobox, Command, CommandPalette, ContextMenu
- DataTable, DatePicker, Dialog, Drawer, Dropdown
- FileUpload, FilterGroup, Form, FormBuilder
- HoverCard, Input, InputGroup, InputOTP, Label
- Logo, Menubar, Metric, NavigationMenu
- Pagination, Popover, Progress, RadioGroup
- Resizable, ScrollArea, SearchHighlight, Searchbar
- Select, Separator, Sheet, Sidebar, Skeleton, Slider
- Stack, Switch, Table, Tabs, Text, Textarea
- Toast, Toggle, ToggleGroup, Tooltip

---

## Tips

- **Icons**: Use `@phosphor-icons/react` for consistent iconography
- **Styling**: Use Tailwind classes with CSS variables like `var(--neutral-12)` for theming
- **Shell**: The `AppShell` component provides the sidebar + main content layout

---

## Need Help?

Check out the `admin-visualizer` prototype for examples of more complex implementations.
