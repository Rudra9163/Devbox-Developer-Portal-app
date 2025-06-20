import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    setIsLoading(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.headerTitle}>{'</>'} Devbox</Text>
        <Text style={styles.headerTitle2}>Developer Portal</Text>
        <Text style={styles.subHeader}>
          Sign in to access your dashboard and API analytics
        </Text>
        <View style={styles.loginDetail}>
          <Text style={styles.loginTextDetail}>
            <Text style={styles.spanBold}>Demo Login:</Text> Use any email with password:{' '}
            <Text style={styles.spanPass}>password</Text>
          </Text>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="name@example.com"
            keyboardType="email-address"
            value={formData.email}
            onChangeText={(text) => handleChange('email', text)}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={formData.password}
              onChangeText={(text) => handleChange('password', text)}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.toggleBtn}
              onPress={() => setShowPassword((prev) => !prev)}
            >
              <Text style={styles.toggleText}>{showPassword ? 'Hide' : 'Show'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity >
          <Text style={styles.forgotLink}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.submitBtn, isLoading && styles.disabledBtn]}
          onPress={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.btnText}>Login</Text>}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#f9fafb',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 8,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 20,
    color: '#18181B',
    fontWeight: '700',
    textAlign: 'center',
  },
  headerTitle2: {
    fontSize: 20,
    color: '#18181B',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 6,
  },
  subHeader: {
    fontSize: 14,
    color: '#71717A',
    textAlign: 'center',
    paddingVertical: 10,
  },
  loginDetail: {
    backgroundColor: '#EFF6FF',
    padding: 12,
    borderRadius: 8,
    borderColor: '#BFDBFE',
    borderWidth: 1,
    marginBottom: 18,
    
  },
  loginTextDetail:{
fontSize:11
  },
  spanBold: {
    fontWeight: '700',
  },
  spanPass: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 4,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#BFDBFE',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    backgroundColor: 'transparent',
  },
  passwordWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  toggleBtn: {
    position: 'absolute',
    right: 10,
    top: 14,
  },
  toggleText: {
    fontSize: 12,
    color: '#007bff',
  },
  forgotLink: {
    textAlign: 'right',
    fontSize: 13,
    color: '#007bff',
    marginBottom: 16,
  },
  submitBtn: {
    backgroundColor: '#18181B',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
  disabledBtn: {
    backgroundColor: '#6c757d',
  },
});
