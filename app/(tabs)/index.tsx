import { useEffect, useState } from "react"
import { Image, StyleSheet, Button } from "react-native"
import ParallaxScrollView from "@/components/ParallaxScrollView"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { getAllDays, deleteAllDays } from "@/db/database"

const flows = ["None", "Spotting", "Light", "Medium", "Heavy"]

export default function HomeScreen() {
  const [showData, setShowData] = useState(false)
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    if (showData) {
      console.log("Getting all days")
      getAllDays().then((result) => {
        setData(result)
      })
    }
  }, [showData])

  function handleDeletePress() {
    deleteAllDays()
    setShowData(false)
    setData(null)
  }
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Calendar/DB Testing</ThemedText>
      </ThemedView>
      <ThemedView style={styles.button}>
        <Button title="View DB Data" onPress={() => setShowData(!showData)} />
      </ThemedView>
      <ThemedView style={styles.button}>
        <Button
          title="Delete DB Data"
          onPress={() => deleteAllDays().then(() => setShowData(false))}
        />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        {data &&
          data.map((day: any) => (
            <ThemedText key={day.id}>
              {day.date}: {flows[day.flow_intensity]}
            </ThemedText>
          ))}
      </ThemedView>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  button: {
    width: "60%",
    alignSelf: "center",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 5,
  },
})
