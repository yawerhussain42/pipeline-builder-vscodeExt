import { Badge, Button, Checkbox, Drawer, Select, Table, createTheme, rem } from '@mantine/core';
import classes from './index.module.css';

export const theme = createTheme({
  colors: {
    white: [
      '#f5f5f5',
      '#e7e7e7',
      '#cdcdcd',
      '#b2b2b2',
      '#9a9a9a',
      '#8b8b8b',
      '#848484',
      '#717171',
      '#656565',
      '#575757',
    ],
    primary: [
      '#edf5fd',
      '#d9e6f4',
      '#afcdeb',
      '#82b1e4',
      '#5e9add',
      '#488cda',
      '#11487E',
      '#3072c1',
      '#2665ad',
      '#155799',
    ],
    secondary: [
      '#ebf8ff',
      '#d6edfa',
      '#a7dbf8',
      '#77c8f6',
      '#56b8f5',
      '#45adf5',
      '#3ca8f6',
      '#3093db',
      '#2383c4',
      '#0071ad',
    ],
  },
  primaryColor: 'primary',
  activeClassName: classes.active,
  fontSizes: {
    xs: rem(10),
    sm: rem(12),
    md: rem(13),
    lg: rem(16),
    xl: rem(20),
  },
  lineHeights: {
    xs: '1.4',
    sm: '1.45',
    md: '1.55',
    lg: '1.6',
    xl: '1.65',
  },

  components: {
    Button: Button.extend({
      defaultProps: {
        size: 'sm',
      },
      styles: (theme) => ({
        root: {
          height: theme.components['Button'].defaultProps['size'] === 'sm' ? rem(32) : rem(40),
          overflow: 'unset',
        },
      }),
    }),

    Checkbox: Checkbox.extend({
      defaultProps: {
        size: 'sm',
      },
    }),

    Select: Select.extend({
      defaultProps: {
        allowDeselect: false,
        checkIconPosition: 'right',
      },
    }),
    Drawer: Drawer.extend({
      defaultProps: {
        size: '500px',
        overlayProps: {
          opacity: 0.2,
        },
      },
      styles: () => ({
        header: {
          padding: 10,
          borderBottom: '1px solid #f2f2f2',
        },
      }),
    }),

    Table: Table.extend({
      defaultProps: {
        verticalSpacing: rem(15),
        highlightOnHoverColor: 'var(--mantine-color-blue-light)',
      },
      styles: {
        tr: {
          cursor: 'pointer',
        },
      },
    }),

    Badge: Badge.extend({
      defaultProps: {
        variant: 'light',
        color: 'green',
        radius: 'xs',
        tt: 'capitalize',
        fw: 500,
      },
    }),
  },
});
