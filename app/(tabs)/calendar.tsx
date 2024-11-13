import { StyleSheet, View } from "react-native"
import { Calendar } from "react-native-calendars"
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import { Collapsible } from "@/components/Collapsible"
import { ExternalLink } from "@/components/ExternalLink"
import ParallaxScrollView from "@/components/ParallaxScrollView"
import { ThemedView } from "@/components/ThemedView"
import { IconSymbol } from "@/components/ui/IconSymbol"

const BaseCalendar = () => {
  return (
    <View>
      <Calendar
        style={{ width: "100%" }}
        markedDates={{
          "2023-06-25": { selected: true, marked: true },
          "2023-06-24": { marked: true },
          "2023-06-26": {
            marked: true,
            dotColor: "red",
            activeOpacity: 0,
          },
        }}
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#b6c1cd",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "#00adf5",
          monthTextColor: "#00adf5",
          indicatorColor: "blue",
          textDayFontFamily: "monospace",
          textMonthFontFamily: "monospace",
          textDayHeaderFontFamily: "monospace",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
    </View>
  )
}

// following this tutorial: https://www.geeksforgeeks.org/how-to-create-calendar-app-in-react-native/s
export default function FlowCalendar() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <BaseCalendar />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
})
