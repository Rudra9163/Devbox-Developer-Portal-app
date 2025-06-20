import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { user, apiLogs } from "@/data/mockData";

const Dashboard = () => {
  const getStatusStyle = (status: string) => {
    if (status.startsWith("2")) return styles.statusSuccess;
    if (status.startsWith("4") || status.startsWith("5")) return styles.statusFailed;
    return {};
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerProfile}  testID="welcome-message">
        Welcome to Devbox Developer Portal, {user.name}!
      </Text>

      <View style={styles.subContainer}>
        <View style={styles.profileSection}>
          <Image source={{ uri: user.avatar }} style={styles.avatar}  testID="user-avatar"/>
          <View>
            <Text testID="user-email">
              <Text style={styles.bold} >Email:</Text> {user.email}
            </Text>
            <Text testID="user-role">
              <Text style={styles.bold}>Role:</Text> {user.role}
            </Text>
          </View>
        </View>

        <View style={styles.apiLogSection}>
          <Text style={styles.apiHeading} testID="api-heading">Recent API Calls</Text>

          <ScrollView horizontal style={styles.tableWrapper}>
            <View>
              <View style={styles.tableHeader} testID="table-header">
                <Text style={[styles.cell, styles.apiNameColumn, styles.headerCell]}>API Name</Text>
                <Text style={[styles.cell, styles.timeColumn, styles.headerCell]}>Time</Text>
                <Text style={[styles.cell, styles.statusColumn, styles.headerCell]}>Status</Text>
                <Text style={[styles.cell, styles.responseColumn, styles.headerCell]}>
                  Response Time
                </Text>
              </View>

              {apiLogs.map((log, index) => (
                <View key={index} style={styles.tableRow} testID="api-log-row">
                  <Text style={[styles.cell, styles.apiNameColumn]} numberOfLines={1}>
                    {log.name}
                  </Text>
                  <Text style={[styles.cell, styles.timeColumn]}>{log.time}</Text>
                  <Text
                    style={[
                      styles.cell,
                      styles.statusColumn,
                      getStatusStyle(log.status),
                    ]}
                  >
                    {log.status}
                  </Text>
                  <Text style={[styles.cell, styles.responseColumn]}>{log.responseTime}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    paddingBottom: 40,
  },
  subContainer: {
    padding: 24,
  },
  headerProfile: {
    backgroundColor: "#EFF6FF",
    padding: 12,
    textAlign: "center",
    fontSize: 16,
    color: "#1E40AF",
    borderWidth: 1,
    borderColor: "#BFDBFE",
    paddingTop: 30,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
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
    fontWeight: "700",
  },
  apiLogSection: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  apiHeading: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginBottom: 16,
  },
  tableWrapper: {
    width: "100%",
    borderColor:"#000",
    borderWidth:0.4,
    borderRadius:8,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f5f7fa",
    borderBottomWidth: 1,
    borderColor: "#e2e8f0",
  },
  headerCell: {
    fontWeight: "600",
    color: "#1f2937",
  },
  tableRow: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
  },
  cell: {
    padding: 12,
    fontSize: 14,
    color: "#555",
  },
  statusSuccess: {
    color: "#16a34a",
    fontWeight: "500",
  },
  statusFailed: {
    color: "#dc2626",
    fontWeight: "500",
  },
  apiNameColumn: {
    width: 140,
  },
  timeColumn: {
    width: 100,
  },
  statusColumn: {
    width: 80,
  },
  responseColumn: {
    width: 90,
  },
});

export default Dashboard;
