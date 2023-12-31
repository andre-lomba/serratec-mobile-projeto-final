import { StyleSheet } from "react-native";
import { Color } from "../../utils/COLOR/Colors";
import { Fontes } from "../../utils/Fonts/Fontes";

const styles = StyleSheet.create({
  container: {
    backgroundColor: `${Color.amarelo}`,
    borderWidth: 1,
    borderColor: `${Color.branco}`,
    borderRadius: 20,
    width: 100,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
