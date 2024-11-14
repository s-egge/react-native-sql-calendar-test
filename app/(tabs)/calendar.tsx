import { useState, useEffect, useMemo } from "react"
import { StyleSheet, View, Button } from "react-native"
import { Calendar } from "react-native-calendars"
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import DayView from "@/components/DayView"
import { getOneDay, getAllDays } from "@/db/database"
import type { DayData } from "@/constants/Interfaces"

export default function FlowCalendar() {
  // get today's date
  const today = new Date().toISOString().split("T")[0]
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const handleSelectDate = (date: string) => {
    setSelectedDate(date)
  }
  const [todayData, setTodayData] = useState<DayData | null>(null)
  const [markedDatesObj, setMarkedDates] = useState<any>({})

  async function refreshCalendar() {
    const allDays = await getAllDays()
    const newMarkedDates: {
      [key: string]: { marked: boolean; dotColor: string }
    } = {}
    if (allDays) {
      const newMarkedDates: any = {}
      allDays.forEach((day: any) => {
        newMarkedDates[day.date] = {
          marked: true,
          dotColor: day.flow_intensity > 0 ? "red" : "transparent",
          selected: day.date === today,
        }
      })
      setMarkedDates(newMarkedDates)
      console.log("Marked dates: ", markedDatesObj)
      setSelectedDate(today)
    }
  }

  // get all days and create markedDates on mount
  useEffect(() => {
    refreshCalendar()
  }, [])

  // testing selected date
  useEffect(() => {
    console.log(selectedDate)
  }, [selectedDate])

  useEffect(() => {
    if (!selectedDate) return

    async function fetchData(selectedDate: string) {
      const day = await getOneDay(selectedDate)
      const newMarkedDates = { ...markedDatesObj }

      //reset old selected date
      Object.keys(newMarkedDates).forEach((date) => {
        newMarkedDates[date] = {
          ...newMarkedDates[date],
          selected: false,
        }
      })

      // set new selected date
      newMarkedDates[selectedDate] = {
        ...newMarkedDates[selectedDate],
        selected: true,
      }
      setMarkedDates(newMarkedDates)

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
          <View style={styles.button}>
            <Button title="Refresh Calendar" onPress={refreshCalendar}></Button>
          </View>
          <Calendar
            key={markedDatesObj}
            maxDate={today}
            markedDates={markedDatesObj}
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

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ffffff",
    margin: 8,
    borderRadius: 8,
    padding: 4,
  },
})
