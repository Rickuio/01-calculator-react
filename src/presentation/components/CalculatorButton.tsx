import { Pressable, Text } from "react-native"
import { colors, styles } from "../../config/theme/app-theme"

interface Props {
    label: string;
    subLabel?: string;
    color?: string;
    doubleSize?: boolean;
    blackText?: boolean;
    onPress: () => void;
}


export const CalculatorButton = ({ 
    label,
    subLabel,
    color = colors.darkGray, 
    doubleSize=false, 
    blackText=false,
    onPress 
} : Props) => {
  return (
    <Pressable 
        onPress={() => onPress() } 
        style={({ pressed }) => ({
        ...styles.button,
        backgroundColor: color,
        opacity: (pressed) ? 0.7 : 1
    })}>
        <Text style={{
            ...styles.buttonText,
            color: (blackText) ? '#111111' : '#EEEFFF',
            }}>{ label }
        </Text>
        {
            (subLabel != undefined) 
            ? <Text style={ styles.buttonTextMini }>{ subLabel }</Text>
            : <Text style={ styles.buttonTextMini }></Text>
        }
        
    </Pressable>
  )
}
