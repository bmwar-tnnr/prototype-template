'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  CaretDoubleLeft,
  CaretDoubleRight,
  House,
  Gear,
  CaretUpDown,
  Question,
} from '@phosphor-icons/react';
import { cn } from '@tennr/lasso/utils/cn';
import { Avatar, AvatarImage, AvatarFallback } from '@tennr/lasso/avatar';
import { UserMenuPopover } from './user-menu-popover';

interface SidebarProps {
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
}

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  disabled?: boolean;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

export function Sidebar({ collapsed = false, onCollapsedChange }: SidebarProps) {
  const pathname = usePathname();
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false);
  const userButtonRef = React.useRef<HTMLButtonElement>(null);

  // TODO: Customize navigation items for your prototype
  const navGroups: NavGroup[] = [
    {
      label: 'Main',
      items: [
        {
          label: 'Home',
          href: '/',
          icon: House,
        },
        {
          label: 'Settings',
          href: '/settings',
          icon: Gear,
          disabled: true,
        },
      ],
    },
  ];

  const isItemActive = (item: NavItem) => {
    if (item.href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(item.href);
  };

  return (
    <div
      className={cn(
        'bg-[var(--neutral-3)] flex flex-col h-full shrink-0 transition-all duration-300',
        collapsed ? 'w-12' : 'w-64'
      )}
    >
      {/* Sidebar Header */}
      <div
        className={cn(
          'bg-[var(--neutral-3)] flex items-center p-2',
          collapsed ? 'justify-center' : 'justify-between'
        )}
      >
        <div
          className={cn(
            'flex items-center gap-2',
            collapsed ? 'p-0' : 'p-2 flex-1'
          )}
        >
          <Image
            src="/images/tennr-logo.svg"
            alt="Tennr Logo"
            width={32}
            height={32}
            className="shrink-0"
          />
          {!collapsed && (
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold text-[var(--neutral-11)]">
                MedPlus
              </span>
            </div>
          )}
        </div>
        {!collapsed && (
          <button
            onClick={() => onCollapsedChange?.(!collapsed)}
            className="p-2 rounded-full hover:bg-[var(--neutral-4)] transition-colors"
          >
            <CaretDoubleLeft className="w-4 h-4 text-[var(--neutral-11)]" />
          </button>
        )}
      </div>

      {/* Sidebar Content */}
      <div className="flex-1 flex flex-col gap-2 px-2 overflow-y-auto">
        {/* Expand button when collapsed */}
        {collapsed && (
          <button
            onClick={() => onCollapsedChange?.(!collapsed)}
            className="flex items-center justify-center p-2 rounded-md hover:bg-[var(--neutral-4)] transition-colors mb-1"
            title="Expand sidebar"
          >
            <CaretDoubleRight className="w-4 h-4 text-[var(--neutral-11)]" />
          </button>
        )}

        {navGroups.map((group) => (
          <div key={group.label} className="flex flex-col gap-1">
            {/* Group Label */}
            {!collapsed && group.label !== 'Main' && (
              <div className="px-2 py-2">
                <span className="text-xs font-medium text-[var(--neutral-11)] uppercase tracking-wide font-mono">
                  {group.label}
                </span>
              </div>
            )}

            {/* Group Items */}
            <nav className="flex flex-col gap-0.5">
              {group.items.map((item) => {
                const isActive = isItemActive(item);
                const Icon = item.icon;

                if (item.disabled) {
                  return (
                    <div
                      key={item.label}
                      className={cn(
                        'flex items-center gap-2 rounded-md text-sm font-normal transition-colors opacity-50 cursor-not-allowed',
                        collapsed ? 'justify-center p-2' : 'px-2 py-2',
                        'text-[var(--neutral-11)]'
                      )}
                      title={collapsed ? item.label : undefined}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      {!collapsed && <span className="truncate">{item.label}</span>}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-2 rounded-md text-sm font-normal transition-colors',
                      collapsed ? 'justify-center p-2' : 'px-2 py-2',
                      isActive
                        ? 'bg-[var(--neutral-5)] text-[var(--neutral-12)]'
                        : 'text-[var(--neutral-11)] hover:bg-[var(--neutral-4)] hover:text-[var(--neutral-12)]'
                    )}
                    title={collapsed ? item.label : undefined}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    {!collapsed && <span className="truncate">{item.label}</span>}
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>

      {/* Sidebar Footer - User Profile */}
      <div className="p-2">
        {collapsed ? (
          <div className="flex flex-col items-center gap-2 pb-2.5">
            <button
              className="p-2 rounded-md hover:bg-[var(--neutral-4)] transition-colors"
              title="Help"
            >
              <Question className="w-4 h-4 text-[var(--neutral-11)]" />
            </button>
            <button
              ref={userButtonRef}
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="p-0 rounded-md hover:bg-[var(--neutral-4)] transition-colors"
              title="User Menu"
            >
              <Avatar className="w-8 h-8">
                <AvatarImage src="/images/avatar.png" alt="User avatar" />
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
            </button>
          </div>
        ) : (
          <button
            ref={userButtonRef}
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="w-full flex items-center gap-2 p-2 rounded-md hover:bg-[var(--neutral-4)] transition-colors"
          >
            <Avatar className="w-8 h-8 shrink-0">
              <AvatarImage src="/images/avatar.png" alt="User avatar" />
              <AvatarFallback>AA</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-left min-w-0">
              <div className="text-sm font-semibold text-[var(--neutral-12)] truncate">
                Alex Apple
              </div>
              <div className="text-xs text-[var(--neutral-9)] truncate">
                alex@tennr.com
              </div>
            </div>
            <CaretUpDown className="w-4 h-4 text-[var(--neutral-9)]" />
          </button>
        )}
        <UserMenuPopover
          isOpen={isUserMenuOpen}
          onClose={() => setIsUserMenuOpen(false)}
          anchorRef={userButtonRef}
        />
      </div>
    </div>
  );
}
