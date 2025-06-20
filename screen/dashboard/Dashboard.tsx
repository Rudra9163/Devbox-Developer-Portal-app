import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import { user, apiLogs } from '@/data/mockData'; // Same mockData.js as web version

const Dashboard = () => {
  const getStatusStyle = (status: string) => {
    if (status.startsWith('2')) return styles.statusSuccess;
    if (status.startsWith('4') || status.startsWith('5')) return styles.statusFailed;
    return {};
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerProfile}>
        Welcome to Devbox Developer Portal, {user.name}!
      </Text>

      <View style={styles.subContainer}>
        <View style={styles.profileSection}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <View>
            <Text>
              <Text style={styles.bold}>Email:</Text> {user.email}
            </Text>
            <Text>
              <Text style={styles.bold}>Role:</Text> {user.role}
            </Text>
          </View>
        </View>

        <View style={styles.apiLogSection}>
          <Text style={styles.apiHeading}>Recent API Calls</Text>

          <ScrollView horizontal style={styles.tableWrapper}>
            <View>
              <View style={styles.tableHeader}>
                <Text style={styles.headerCell}>API Name</Text>
                <Text style={styles.headerCell}>Time</Text>
                <Text style={styles.headerCell}>Status</Text>
                <Text style={styles.headerCell}>Response Time</Text>
              </View>

              {apiLogs.map((log, index) => (
                <View key={index} style={styles.tableRow}>
                  <Text style={styles.cell}>{log.name}</Text>
                  <Text style={styles.cell}>{log.time}</Text>
                  <Text style={[styles.cell, getStatusStyle(log.status)]}>
                    {log.status}
                  </Text>
                  <Text style={styles.cell}>{log.responseTime}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    paddingBottom: 32,
  },
  subContainer: {
    padding: 24,
  },
  headerProfile: {
    backgroundColor: '#EFF6FF',
    padding: 16,
    textAlign: 'center',
    fontSize: 17,
    color: '#1E40AF',
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 32,
    padding: 13,
  },
  avatar: {
    borderRadius: 40,
    width: 80,
    height: 80,
    marginRight: 16,
  },
  bold: {
    fontWeight: '700',
  },
  apiLogSection: {
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  apiHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  tableWrapper: {
    width: '100%',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f5f7fa',
    borderBottomWidth: 1,
    borderColor: '#e2e8f0',
  },
  headerCell: {
    flex: 1,
    padding: 12,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#e5e7eb',
  },
  cell: {
    flex: 1,
    padding: 12,
    fontSize: 15,
    color: '#555',
  },
  statusSuccess: {
    color: '#16a34a',
    fontWeight: '500',
  },
  statusFailed: {
    color: '#dc2626',
    fontWeight: '500',
  },
});
