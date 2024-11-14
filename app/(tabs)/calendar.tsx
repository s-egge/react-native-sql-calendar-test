import { useState, useEffect } from "react"
import { StyleSheet, View } from "react-native"
import { Calendar } from "react-native-calendars"
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import DayView from "@/components/DayView"
import { getOneDay } from "@/db/database"
import type { DayData } from "@/constants/Interfaces"

// following this tutorial: https://www.geeksforgeeks.org/how-to-create-calendar-app-in-react-native/s
export default function FlowCalendar() {
  // get today's date
  const today = new Date().toISOString().split("T")[0]
  const [selectedDate, setSelectedDate] = useState<string | null>(today)
  const handleSelectDate = (date: string) => {
    setSelectedDate(date)
  }
  const [todayData, setTodayData] = useState<DayData | null>(null)

  // testing selected date
  useEffect(() => {
    console.log(selectedDate)
  }, [selectedDate])

  useEffect(() => {
    if (!selectedDate) return

    async function fetchData(selectedDate: string) {
      const day = await getOneDay(selectedDate)
      if (day) {
        setTodayData(day as DayData)
      } else {
        setTodayData(null)
      }
    }
    fetchData(selectedDate)
  }, [selectedDate])

  useEffect(() => {
    console.log("Today data: ", todayData)
    console.log("Todays flow: ", todayData?.flow_intensity)
  }, [todayData])

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Calendar
            maxDate={today}
            markedDates={{
              ...(selectedDate && {
                [selectedDate]: { selected: true },
              }),
              "2024-11-04": {
                marked: true,
                dotColor: "pink",
                selected: selectedDate === "2024-11-04",
              },
              "2024-11-05": {
                marked: true,
                dotColor: "red",
                selected: selectedDate === "2024-11-05",
              },
              "2024-11-06": {
                marked: true,
                selected: selectedDate === "2024-11-06",
                dotColor: "red",
                activeOpacity: 0,
              },
              "2024-11-07": {
                marked: true,
                dotColor: "pink",
                selected: selectedDate === "2024-11-07",
              },
            }}
            onDayPress={(day: { dateString: string }) =>
              handleSelectDate(day.dateString)
            }
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
        {selectedDate && (
          <DayView
            date={selectedDate}
            dateFlow={todayData?.flow_intensity ? todayData.flow_intensity : 0}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({})
