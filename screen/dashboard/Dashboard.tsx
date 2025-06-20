import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { user, apiLogs } from "@/data/mockData";

const Dashboard = () => {
  const getStatusStyle = (status: string) => {
    if (status.startsWith("2")) return styles.statusSuccess;
    if (status.startsWith("4") || status.startsWith("5"))
      return styles.statusFailed;
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
              {/* Header Row */}
              <View style={styles.tableHeader}>
                <Text style={styles.apiNameColumn} numberOfLines={1}>
                  API Name
                </Text>
                <Text style={styles.apiNameColumn} numberOfLines={1}>
                  Time
                </Text>
                <Text style={styles.apiNameColumn} numberOfLines={1}>
                  Status
                </Text>
                <Text style={styles.apiNameColumn} numberOfLines={1}>
                  Response Time
                </Text>
              </View>

              {/* Data Rows */}
              {apiLogs.map((log, index) => (
                <View key={index} style={styles.tableRow}>
                  <Text
                    style={styles.apiNameColumn}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {log.name}
                  </Text>
                  <Text style={styles.apiNameColumn}>{log.time}</Text>
                  <Text
                    style={[styles.apiNameColumn, getStatusStyle(log.status)]}
                  >
                    {log.status}
                  </Text>
                  <Text style={styles.apiNameColumn}>{log.responseTime}</Text>
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
    backgroundColor: "#f9f9f9",
    minHeight: "100%",
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
    borderColor: "#000000",
    borderWidth: 0.2,
    borderRadius: 8,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f5f7fa",
    borderBottomWidth: 1,
    borderColor: "#e2e8f0",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
    backgroundColor: "#fff",
  },
  apiNameColumn: {
    width: 108,
    padding: 8,
    fontSize: 12,
    color: "#555",
    textAlign: "left",
  },
  statusSuccess: {
    color: "#16a34a",
    fontWeight: "500",
  },
  statusFailed: {
    color: "#dc2626",
    fontWeight: "500",
  },
});
