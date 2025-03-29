import { ByRoleMatcher, ByRoleOptions } from '@testing-library/react';

export interface UITestElement {
  role: ByRoleMatcher;
  name: ByRoleOptions['name'];
}
