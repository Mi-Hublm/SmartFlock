import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import Checkbox from 'expo-checkbox';

const Terms = () => {
    const navigation = useRouter()
    const [isChecked, setIsChecked] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Terms and Conditions</Text>

        <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
        <Text style={styles.text}>
          By accessing or using the SmartFlock app, you agree to be legally
          bound by these Terms and Conditions. If you do not agree, you must not
          use the app.
        </Text>

        <Text style={styles.sectionTitle}>2. License</Text>
        <Text style={styles.text}>
          SmartFlock grants you a limited, non-exclusive, non-transferable
          license to use the app for personal, non-commercial purposes.
        </Text>

        <Text style={styles.sectionTitle}>3. User Content</Text>
        <Text style={styles.text}>
          Any content you post may be viewed by others. You are solely
          responsible for your content and agree not to post inappropriate
          material.
        </Text>

        <Text style={styles.sectionTitle}>4. Disclaimer</Text>
        <Text style={styles.text}>
          The SmartFlock app is provided "as is" without warranties. We do not
          guarantee the accuracy or completeness of content or services.
        </Text>

        <Text style={styles.sectionTitle}>5. Limitation of Liability</Text>
        <Text style={styles.text}>
          SmartFlock is not liable for damages arising from the use of the app,
          including errors or omissions.
        </Text>

        <Text style={styles.sectionTitle}>6. Indemnification</Text>
        <Text style={styles.text}>
          You agree to indemnify and hold SmartFlock harmless from claims
          related to your use of the app.
        </Text>

        <Text style={styles.sectionTitle}>7. Termination</Text>
        <Text style={styles.text}>
          SmartFlock may terminate your access at any time. Upon termination,
          you must stop using the app.
        </Text>


        <View style={styles.containerbox}>
      {/* Terms & Conditions Checkbox */}
      <View style={styles.checkboxContainer}>
        <Checkbox value={isChecked} onValueChange={setIsChecked} />
        <Text style={styles.checkboxText}>Agree to Terms and Conditions</Text>
      </View>

      {/* Next Button */}
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, !isChecked && styles.disabledButton]}
          onPress={() => navigation.push("auth/signin")} 
          disabled={!isChecked}
        >
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Terms

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  containerbox: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  checkboxText: {
    paddingLeft: 5,
    fontSize: 16,
  },
  buttonContainer: {
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#1B3E37",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#A9A9A9",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});