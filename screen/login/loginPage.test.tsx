import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import LoginPage from './LoginPage';

jest.mock('expo-router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('LoginPage', () => {
  it('renders all form elements', () => {
    const { getByTestId } = render(<LoginPage />);

    expect(getByTestId('email-input')).toBeTruthy();
    expect(getByTestId('password-input')).toBeTruthy();
    expect(getByTestId('submit-button')).toBeTruthy();
    expect(getByTestId('forgot-password-link')).toBeTruthy();
  });

  it('allows input typing', () => {
    const { getByTestId } = render(<LoginPage />);

    fireEvent.changeText(getByTestId('email-input'), 'test@example.com');
    fireEvent.changeText(getByTestId('password-input'), 'password');

    expect(getByTestId('email-input').props.value).toBe('test@example.com');
    expect(getByTestId('password-input').props.value).toBe('password');
  });

  it('toggles password visibility', () => {
    const { getByTestId } = render(<LoginPage />);
    const passwordInput = getByTestId('password-input');
    expect(passwordInput.props.secureTextEntry).toBe(true);
    fireEvent.press(getByTestId('toggle-password-visibility'));
    expect(getByTestId('password-input').props.secureTextEntry).toBe(false);
  });

  it('shows loading indicator when submitting', async () => {
    const { getByTestId } = render(<LoginPage />);

    fireEvent.press(getByTestId('submit-button'));

    await waitFor(() => {
      expect(getByTestId('loading-indicator')).toBeTruthy();
    });
  });
});
