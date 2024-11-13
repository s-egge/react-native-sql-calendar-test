import { useState } from "react"
import { StyleSheet, View } from "react-native"
import { Calendar } from "react-native-calendars"
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import DayView from "@/components/DayView"

// following this tutorial: https://www.geeksforgeeks.org/how-to-create-calendar-app-in-react-native/s
export default function FlowCalendar() {
  // get today's date
  const today = new Date()
  const [selectedDate, setSelectedDate] = useState<string | null>(
    today.toISOString().split("T")[0]
  )
  const handleSelectDate = (date: string) => {
    setSelectedDate(date)
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Calendar
            markedDates={{
              "2024-11-04": { selected: true, marked: true },
              "2024-11-05": { marked: true },
              "2024-11-06": {
                marked: true,
                dotColor: "red",
                activeOpacity: 0,
              },
            }}
            onDayPress={(day) => handleSelectDate(day.dateString)}
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
        {selectedDate && <DayView date={selectedDate} />}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({})
