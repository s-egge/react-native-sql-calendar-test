import { StyleSheet, View } from "react-native"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"

export default function DayView({ date }: { date: string }) {
  return (
    <View>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{date}</ThemedText>
      </ThemedView>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
})
