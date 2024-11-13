import { useState } from "react"
import { StyleSheet, View, TouchableOpacity, Button } from "react-native"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"

function FlowRadioButtons() {
  const [selectedOption, setSelectedOption] = useState<string>("None")

  const options = ["None", "Spotting", "Light", "Medium", "Heavy"]

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={styles.radioContainer}
          onPress={() => setSelectedOption(option)}
        >
          <View style={styles.radioCircle}>
            {selectedOption === option && (
              <View style={styles.selectedCircle} />
            )}
          </View>
          <ThemedText style={styles.radioText}>{option}</ThemedText>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default function DayView({ date }: { date: string }) {
  function onSave() {
    console.log("save")
  }

  return (
    <View>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{date}</ThemedText>
        <View style={styles.button}>
          <Button onPress={() => onSave()} title="save">
            Save
          </Button>
        </View>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Flow</ThemedText>
        <FlowRadioButtons />
      </ThemedView>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  container: {
    marginVertical: 20,
    alignItems: "flex-start",
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#00adf5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  selectedCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#00adf5",
  },
  radioText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 5,
  },
})
