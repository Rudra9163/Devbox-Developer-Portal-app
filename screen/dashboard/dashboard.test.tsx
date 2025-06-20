import React from 'react';
import { render } from '@testing-library/react-native';
import Dashboard from './Dashboard'; 
import { user, apiLogs } from '@/data/mockData';

describe('Dashboard screen', () => {
  it('renders welcome message with user name', () => {
    const { getByTestId } = render(<Dashboard />);
    expect(getByTestId('welcome-message').props.children.join('')).toContain(user.name);
  });

  it('renders user avatar image', () => {
    const { getByTestId } = render(<Dashboard />);
    const avatar = getByTestId('user-avatar');
    expect(avatar).toBeTruthy();
    expect(avatar.props.source.uri).toBe(user.avatar);
  });

 it('renders email and role correctly via testIDs', () => {
  const { getByTestId } = render(<Dashboard />);
  expect(getByTestId('user-email').props.children.join('')).toContain(user.email);
  expect(getByTestId('user-role').props.children.join('')).toContain(user.role);
});

  it('displays Recent API Calls heading', () => {
    const { getByTestId } = render(<Dashboard />);
    expect(getByTestId('api-heading').props.children).toBe('Recent API Calls');
  });

  it('renders table header correctly', () => {
    const { getByTestId, getByText } = render(<Dashboard />);
    expect(getByTestId('table-header')).toBeTruthy();
    expect(getByText('API Name')).toBeTruthy();
    expect(getByText('Time')).toBeTruthy();
    expect(getByText('Status')).toBeTruthy();
    expect(getByText('Response Time')).toBeTruthy();
  });

  it('renders correct number of API log rows', () => {
    const { getAllByTestId } = render(<Dashboard />);
    const rows = getAllByTestId('api-log-row');
    expect(rows.length).toBe(apiLogs.length);
  });
});
