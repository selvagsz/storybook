import { document } from 'global';
import renderStorybookUI from '@storybook/ui';
import Provider from './provider';

const rootEl = document.getElementById('root');
renderStorybookUI(rootEl, new Provider());
