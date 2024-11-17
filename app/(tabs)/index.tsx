import { useEffect, useState } from "react"
import { Image, StyleSheet, View } from "react-native"
import ParallaxScrollView from "@/components/ParallaxScrollView"
import { getAllDays, deleteAllDays } from "@/db/database"
import { Button, Text } from "react-native-paper"

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
      <Text variant="displaySmall">Calendar/DB Testing</Text>
      <Button mode="elevated" onPress={() => setShowData(!showData)}>
        View DB Data
      </Button>
      <Button
        mode="elevated"
        onPress={() => deleteAllDays().then(() => setShowData(false))}
      >
        Delete DB Data
      </Button>
      <View style={styles.stepContainer}>
        {data &&
          data.map((day: any) => (
            <Text variant="bodyMedium" key={day.id}>
              {day.date}: {flows[day.flow_intensity]}
            </Text>
          ))}
      </View>
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
